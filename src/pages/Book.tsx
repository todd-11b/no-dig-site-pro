import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format, addDays, startOfDay, isSameDay, isBefore } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CalendarDays, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { trackEvent } from "@/lib/gtag";

type Step = "date" | "time" | "details" | "confirm";

export default function BookPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const estimateMaterial = searchParams.get("material");
  const estimateLength = searchParams.get("length");
  const estimateGate = searchParams.get("gate");
  const estimateDemo = searchParams.get("demo");
  const estimateRange = searchParams.get("estimate");
  const hasEstimate = !!estimateMaterial;

  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Calendar month navigation
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  // Contact form
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  // Generate calendar days for current month view
  const generateCalendarDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPad = firstDay.getDay(); // 0=Sun
    const days: (Date | null)[] = [];

    for (let i = 0; i < startPad; i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  };

  const today = startOfDay(new Date());
  const maxDate = addDays(today, 60);
  const calendarDays = generateCalendarDays();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const canGoPrev = calendarMonth > new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoNext = calendarMonth < new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);

  // Fetch slots when date is selected
  useEffect(() => {
    if (!selectedDate) return;
    setLoadingSlots(true);
    setSlots([]);
    setSelectedSlot(null);

    const startDate = String(selectedDate.getTime());
    const endDate = String(addDays(selectedDate, 1).getTime());

    supabase.functions
      .invoke("ghl-calendar", {
        body: { action: "get-slots", startDate, endDate, timezone: "America/Chicago" },
      })
      .then(({ data, error }) => {
        if (error) {
          console.error("Slots error:", error);
          toast.error("Couldn't load available times. Please try again.");
          setLoadingSlots(false);
          return;
        }
        // GHL returns slots keyed by date string
        const slotsObj = data?.slots || {};
        const allSlots: string[] = [];
        Object.values(slotsObj).forEach((dateSlots: any) => {
          if (Array.isArray(dateSlots?.slots)) {
            allSlots.push(...dateSlots.slots);
          } else if (Array.isArray(dateSlots)) {
            allSlots.push(...dateSlots);
          }
        });
        setSlots(allSlots);
        setLoadingSlots(false);
        if (allSlots.length > 0) setStep("time");
      });
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    if (isBefore(date, today) || isBefore(maxDate, date)) return;
    setSelectedDate(date);
    setStep("time");
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    setStep("details");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !form.firstName || !form.phone || !form.email) return;

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("ghl-calendar", {
        body: {
          action: "book",
          slot: selectedSlot,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
          address: form.address,
          notes: form.notes,
          ...(hasEstimate && {
            estimateData: {
              fenceType: estimateMaterial,
              length: estimateLength ? Number(estimateLength) : undefined,
              gate: estimateGate || undefined,
              demoHaulOff: estimateDemo === "yes",
              ...(estimateRange && (() => {
                const match = estimateRange.match(/\$?([\d,]+).*\$?([\d,]+)/);
                if (match) {
                  return {
                    lowEstimate: Number(match[1].replace(/,/g, "")),
                    highEstimate: Number(match[2].replace(/,/g, "")),
                  };
                }
                return {};
              })()),
            },
          }),
        },
      });

      if (error || !data?.success) {
        throw new Error(data?.error || "Booking failed");
      }

      setStep("confirm");
    } catch (err: any) {
      console.error("Booking error:", err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatSlotTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  };

  return (
    <>
      <PageMeta
        title="Schedule Your Fence Consultation | Abrams Fence Co."
        description="Book a free fence consultation with Abrams Fence Company. Pick a time that works for you."
        noindex
      />
      <Header />
      <main className="pt-20 pb-16 lg:pb-0">
        <section className="section-padding-lg">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                Step 2
              </p>
              <h1 className="text-display text-primary mb-4">
                Schedule Your Consultation
              </h1>
              <p className="text-body max-w-lg mx-auto">
                Pick a time that works for you. We'll confirm your appointment and give you a detailed quote.
              </p>
            </motion.div>

            {hasEstimate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="rounded-xl bg-accent/5 border border-accent/20 p-4 mb-8 max-w-md mx-auto text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Your Estimate</p>
                <p className="text-2xl font-black text-accent mb-1">{estimateRange}</p>
                <div className="text-xs text-muted-foreground space-y-0.5">
                  <p>{estimateMaterial} · {estimateLength} ft</p>
                  {estimateGate !== "None" && <p>Gates: {estimateGate}</p>}
                  {estimateDemo === "yes" && <p>Includes demo &amp; haul-off</p>}
                </div>
              </motion.div>
            )}

            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {(["date", "time", "details"] as Step[]).map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step === s || (["date", "time", "details"].indexOf(step) > i) || step === "confirm"
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < 2 && (
                    <div className={`w-8 h-px ${
                      ["date", "time", "details"].indexOf(step) > i || step === "confirm"
                        ? "bg-accent"
                        : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* STEP 1: DATE PICKER */}
              {step === "date" && (
                <motion.div
                  key="date"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="card-surface p-6 shadow-lift"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <CalendarDays className="w-5 h-5 text-accent" />
                    <h2 className="text-lg font-bold text-foreground">Choose a Date</h2>
                  </div>

                  {/* Month navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))}
                      disabled={!canGoPrev}
                      className="p-2 rounded-lg hover:bg-secondary disabled:opacity-30 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-semibold text-foreground">
                      {format(calendarMonth, "MMMM yyyy")}
                    </span>
                    <button
                      onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))}
                      disabled={!canGoNext}
                      className="p-2 rounded-lg hover:bg-secondary disabled:opacity-30 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Weekday headers */}
                  <div className="grid grid-cols-7 mb-1">
                    {weekDays.map((d) => (
                      <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Day grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, idx) => {
                      if (!day) return <div key={`pad-${idx}`} />;
                      const isPast = isBefore(day, today);
                      const isFuture = isBefore(maxDate, day);
                      const isDisabled = isPast || isFuture;
                      const isSelected = selectedDate && isSameDay(day, selectedDate);
                      const isToday = isSameDay(day, today);

                      return (
                        <button
                          key={day.toISOString()}
                          onClick={() => !isDisabled && handleDateSelect(day)}
                          disabled={isDisabled}
                          className={`
                            aspect-square rounded-lg text-sm font-medium transition-all
                            ${isDisabled ? "text-muted-foreground/40 cursor-not-allowed" : "hover:bg-accent/10 cursor-pointer"}
                            ${isSelected ? "bg-accent text-accent-foreground hover:bg-accent" : ""}
                            ${isToday && !isSelected ? "ring-1 ring-accent/40" : ""}
                          `}
                        >
                          {day.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: TIME SLOTS */}
              {step === "time" && (
                <motion.div
                  key="time"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="card-surface p-6 shadow-lift"
                >
                  <button
                    onClick={() => setStep("date")}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to calendar
                  </button>

                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-5 h-5 text-accent" />
                    <h2 className="text-lg font-bold text-foreground">Pick a Time</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5">
                    {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                  </p>

                  {loadingSlots ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-6 h-6 animate-spin text-accent" />
                      <span className="ml-2 text-sm text-muted-foreground">Loading available times…</span>
                    </div>
                  ) : slots.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground mb-3">No available times on this date.</p>
                      <Button variant="outline" onClick={() => setStep("date")}>
                        Choose another date
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {slots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => handleSlotSelect(slot)}
                          className={`
                            rounded-lg border px-3 py-2.5 text-sm font-medium transition-all
                            ${selectedSlot === slot
                              ? "bg-accent text-accent-foreground border-accent"
                              : "border-border hover:border-accent/50 hover:bg-accent/5"
                            }
                          `}
                        >
                          {formatSlotTime(slot)}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 3: CONTACT DETAILS */}
              {step === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="card-surface p-6 shadow-lift"
                >
                  <button
                    onClick={() => setStep("time")}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to times
                  </button>

                  <h2 className="text-lg font-bold text-foreground mb-1">Your Details</h2>
                  <p className="text-sm text-muted-foreground mb-5">
                    {selectedDate && format(selectedDate, "EEEE, MMM d")} at{" "}
                    {selectedSlot && formatSlotTime(selectedSlot)}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Property Address</Label>
                      <Input
                        id="address"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="Where will the fence be installed?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Notes (optional)</Label>
                      <Input
                        id="notes"
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        placeholder="Anything we should know?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-12 text-cta bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Booking…
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}

              {/* STEP 4: CONFIRMATION */}
              {step === "confirm" && (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-surface p-8 shadow-lift text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-accent mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">You're Booked!</h2>
                  <p className="text-muted-foreground mb-1">
                    {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                  </p>
                  <p className="text-lg font-semibold text-accent mb-6">
                    {selectedSlot && formatSlotTime(selectedSlot)}
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    We'll send a confirmation to <strong>{form.email}</strong>. See you soon!
                  </p>
                  <Button
                    onClick={() => navigate("/thank-you")}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Continue →
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-muted-foreground text-center mt-6">
              No obligation. Free estimate included with every consultation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
