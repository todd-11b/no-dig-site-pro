import { useState, useMemo } from "react";
import {
  ComposedChart, Bar, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const usd = (v: number) => "$" + Math.round(v).toLocaleString();
const pct = (v: number) => Math.round(v * 10) / 10 + "%";

// ── Slider ────────────────────────────────────────────────────────────────────
function Slider({
  label, sub, value, setValue, min, max, step = 1, fmt,
}: {
  label: string; sub?: string; value: number;
  setValue: (v: number) => void; min: number; max: number;
  step?: number; fmt: (v: number) => string;
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-semibold text-blue-700">{fmt(value)}</span>
      </div>
      {sub && <div className="text-xs text-gray-400 mb-1">{sub}</div>}
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{fmt(min)}</span><span>{fmt(max)}</span>
      </div>
    </div>
  );
}

// ── KPI Card ─────────────────────────────────────────────────────────────────
function KpiCard({
  label, value, sub, color = "blue",
}: {
  label: string; value: string; sub?: string;
  color?: "blue" | "green" | "red" | "amber";
}) {
  const colors = {
    blue:  "bg-blue-50  text-blue-800",
    green: "bg-green-50 text-green-800",
    red:   "bg-red-50   text-red-700",
    amber: "bg-amber-50 text-amber-800",
  };
  return (
    <div className={`rounded-xl p-4 ${colors[color]}`}>
      <div className="text-xs uppercase tracking-wide opacity-70 mb-1">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
      {sub && <div className="text-xs opacity-60 mt-1">{sub}</div>}
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-sm font-semibold text-gray-700 border-b border-gray-100 pb-2 mb-4">{title}</div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function FinancialModel() {
  // Revenue
  const [avgJob,    setAvgJob]    = useState(5000);
  const [j1,        setJ1]        = useState(2);
  const [j2,        setJ2]        = useState(6);
  const [j3,        setJ3]        = useState(10);
  const [j4,        setJ4]        = useState(14);

  // COGS
  const [matPct,    setMatPct]    = useState(35);
  const [labPct,    setLabPct]    = useState(25);
  const [othPct,    setOthPct]    = useState(4);

  // Fixed monthly
  const [ownerDraw, setOwnerDraw] = useState(3500);
  const [mktBudget, setMktBudget] = useState(2000);
  const [vehicle,   setVehicle]   = useState(1000);
  const [insurance, setInsurance] = useState(450);
  const [software,  setSoftware]  = useState(350);
  const [misc,      setMisc]      = useState(250);

  // Startup costs
  const [startupItems, setStartupItems] = useState([
    { label: "Tools & equipment",            amount: 7500,  funded: false },
    { label: "Truck / trailer",              amount: 18000, funded: false },
    { label: "Initial materials inventory",  amount: 8000,  funded: false },
    { label: "Licensing / insurance",        amount: 3500,  funded: false },
    { label: "Marketing launch budget",      amount: 3000,  funded: false },
    { label: "No-Dig equipment (SteelCore)", amount: 3500,  funded: false },
    { label: "Website / GHL setup",          amount: 1500,  funded: false },
    { label: "Misc / buffer",                amount: 1000,  funded: false },
  ]);

  const [activeTab, setActiveTab] = useState<"overview"|"sliders"|"breakeven"|"startup">("overview");

  // ── Derived calculations ───────────────────────────────────────────────────
  const cogsPct   = (matPct + labPct + othPct) / 100;
  const gm        = 1 - cogsPct;
  const fixedMo   = ownerDraw + mktBudget + vehicle + insurance + software + misc;
  const contribMo = avgJob * gm;
  const beJobs    = contribMo > 0 ? Math.ceil(fixedMo / contribMo) : 999;
  const isOk      = j4 >= beJobs;

  const monthlyJobs = useMemo(
    () => [j1,j1, j2,j2,j2,j2, j3,j3,j3, j4,j4,j4],
    [j1,j2,j3,j4]
  );

  const monthlyData = useMemo(() => {
    let cum = 0;
    return MONTHS.map((month, i) => {
      const jobs   = monthlyJobs[i];
      const rev    = jobs * avgJob;
      const gp     = rev * gm;
      const ebitda = gp - fixedMo;
      cum += ebitda;
      return { month, jobs, rev, gp, ebitda, cum };
    });
  }, [monthlyJobs, avgJob, gm, fixedMo]);

  const totals = useMemo(() => ({
    rev:    monthlyData.reduce((s, d) => s + d.rev, 0),
    gp:     monthlyData.reduce((s, d) => s + d.gp, 0),
    ebitda: monthlyData.reduce((s, d) => s + d.ebitda, 0),
    jobs:   monthlyData.reduce((s, d) => s + d.jobs, 0),
  }), [monthlyData]);

  const gmPct     = totals.rev > 0 ? (totals.gp / totals.rev) * 100 : 0;
  const ebitdaPct = totals.rev > 0 ? (totals.ebitda / totals.rev) * 100 : 0;

  const totalStartup  = startupItems.reduce((s, x) => s + x.amount, 0);
  const fundedStartup = startupItems.filter(x => x.funded).reduce((s, x) => s + x.amount, 0);
  const fundedPct     = totalStartup > 0 ? Math.round((fundedStartup / totalStartup) * 100) : 0;

  const tabs = [
    { id: "overview",  label: "Overview"  },
    { id: "sliders",   label: "Sliders"   },
    { id: "breakeven", label: "Break-Even"},
    { id: "startup",   label: "Startup"   },
  ] as const;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 p-4 max-w-3xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Abrams Fence — Financial Model</h1>
          <p className="text-xs text-gray-400">Drag sliders. Charts update live.</p>
        </div>
        <div className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
          isOk ? "bg-green-50 text-green-800 border-green-300"
               : "bg-red-50   text-red-700   border-red-300"
        }`}>
          {isOk ? `Break-even: on track` : `Need ${beJobs} jobs/mo`}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 mb-4">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
              activeTab === t.id
                ? "bg-blue-600 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW TAB ──────────────────────────────────────────────────── */}
      {activeTab === "overview" && (
        <div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <KpiCard label="Year 1 Revenue" value={usd(totals.rev)}
              sub={`${totals.jobs} total jobs`} color="blue" />
            <KpiCard label="Year 1 EBITDA"  value={usd(totals.ebitda)}
              sub={`${Math.round(ebitdaPct)}% margin`}
              color={totals.ebitda >= 0 ? "green" : "red"} />
            <KpiCard label="Gross Margin"   value={pct(gmPct)}
              sub="Target: 40–50%"
              color={gmPct >= 40 ? "green" : gmPct >= 35 ? "amber" : "red"} />
            <KpiCard label="Break-Even"     value={`${beJobs} jobs/mo`}
              sub={`Targeting ${j4} by Dec`} color={isOk ? "green" : "red"} />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <SectionHeader title="Monthly revenue & cumulative cash" />
            <div className="flex gap-4 text-xs text-gray-400 mb-3">
              <span><span className="inline-block w-2.5 h-2.5 bg-blue-500 rounded-sm mr-1" />Revenue</span>
              <span><span className="inline-block w-2.5 h-2.5 bg-green-600 rounded-sm mr-1" />Gross profit</span>
              <span><span className="inline-block w-2.5 h-2.5 bg-amber-500 rounded-sm mr-1" />Cum. cash</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <ComposedChart data={monthlyData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="l" tickFormatter={v => v >= 1000 ? "$" + (v/1000).toFixed(0) + "K" : "$" + v}
                  tick={{ fontSize: 10 }} width={46} />
                <YAxis yAxisId="r" orientation="right"
                  tickFormatter={v => v >= 1000 ? "$" + (v/1000).toFixed(0) + "K" : "$" + v}
                  tick={{ fontSize: 10 }} width={50} />
                <Tooltip formatter={(v: number) => usd(v)} />
                <Bar yAxisId="l" dataKey="rev"    name="Revenue"      fill="#3B82F6" opacity={0.85} radius={[3,3,0,0]} />
                <Bar yAxisId="l" dataKey="gp"     name="Gross profit" fill="#16A34A" opacity={0.85} radius={[3,3,0,0]} />
                <Line yAxisId="r" type="monotone" dataKey="cum" name="Cum. cash"
                  stroke="#F59E0B" strokeWidth={2.5} dot={false} />
                <ReferenceLine yAxisId="r" y={0} stroke="#EF4444" strokeDasharray="4 4" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <SectionHeader title="Monthly P&L" />
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-2 text-gray-500 font-medium">Month</th>
                    <th className="text-right p-2 text-gray-500 font-medium">Jobs</th>
                    <th className="text-right p-2 text-gray-500 font-medium">Revenue</th>
                    <th className="text-right p-2 text-gray-500 font-medium">Gross profit</th>
                    <th className="text-right p-2 text-gray-500 font-medium">EBITDA</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((d, i) => (
                    <tr key={i} className={`border-t border-gray-50 ${d.ebitda < 0 ? "bg-red-50" : ""}`}>
                      <td className="p-2 font-medium">{d.month}</td>
                      <td className="p-2 text-right">{d.jobs}</td>
                      <td className="p-2 text-right text-blue-700 font-medium">{usd(d.rev)}</td>
                      <td className="p-2 text-right text-green-700">{usd(d.gp)}</td>
                      <td className={`p-2 text-right font-semibold ${d.ebitda < 0 ? "text-red-600" : "text-green-700"}`}>
                        {usd(d.ebitda)}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-200 bg-blue-50 font-semibold">
                    <td className="p-2">Total</td>
                    <td className="p-2 text-right">{totals.jobs}</td>
                    <td className="p-2 text-right text-blue-700">{usd(totals.rev)}</td>
                    <td className="p-2 text-right text-green-700">{usd(totals.gp)}</td>
                    <td className={`p-2 text-right ${totals.ebitda < 0 ? "text-red-600" : "text-green-700"}`}>
                      {usd(totals.ebitda)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── SLIDERS TAB ───────────────────────────────────────────────────── */}
      {activeTab === "sliders" && (
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <SectionHeader title="Revenue assumptions" />
            <Slider label="Average job size" sub="Blended across all fence types"
              value={avgJob} setValue={setAvgJob} min={2000} max={12000} step={250}
              fmt={v => "$" + v.toLocaleString()} />
            <Slider label="Jobs/month — Jan–Feb (startup)"
              value={j1} setValue={setJ1} min={1} max={15} fmt={v => `${v} jobs/mo`} />
            <Slider label="Jobs/month — Mar–Jun (growth)" sub="Ads + referrals kicking in"
              value={j2} setValue={setJ2} min={1} max={25} fmt={v => `${v} jobs/mo`} />
            <Slider label="Jobs/month — Jul–Sep (peak)"
              value={j3} setValue={setJ3} min={1} max={30} fmt={v => `${v} jobs/mo`} />
            <Slider label="Jobs/month — Oct–Dec (established)"
              value={j4} setValue={setJ4} min={1} max={35} fmt={v => `${v} jobs/mo`} />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <SectionHeader title="Cost structure" />
            <Slider label="Materials % of revenue" sub="Target: 33–37% (Mr. Fence benchmark)"
              value={matPct} setValue={setMatPct} min={20} max={50}
              fmt={v => `${v}%`} />
            <Slider label="Labor % of revenue" sub="$25/hr · wood ~$53/section"
              value={labPct} setValue={setLabPct} min={10} max={40}
              fmt={v => `${v}%`} />
            <Slider label="Other COGS (fuel, misc)"
              value={othPct} setValue={setOthPct} min={1} max={10}
              fmt={v => `${v}%`} />
            <div className={`rounded-lg px-4 py-2.5 text-sm font-medium text-center ${
              gm >= 0.40 ? "bg-green-50 text-green-800"
            : gm >= 0.35 ? "bg-amber-50 text-amber-800"
            :              "bg-red-50   text-red-700"
            }`}>
              Gross margin: {pct(gm * 100)}&nbsp;
              {gm >= 0.40 ? "— on target (40–50%)" : gm >= 0.35 ? "— slightly below 40% target" : "— below target"}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <SectionHeader title="Fixed monthly expenses" />
            <Slider label="Owner draw / salary"
              value={ownerDraw} setValue={setOwnerDraw} min={1000} max={10000} step={500}
              fmt={v => "$" + v.toLocaleString()} />
            <Slider label="Marketing & advertising" sub="Google LSA + Meta"
              value={mktBudget} setValue={setMktBudget} min={500} max={6000} step={250}
              fmt={v => "$" + v.toLocaleString()} />
            <Slider label="Vehicle / equipment"
              value={vehicle} setValue={setVehicle} min={400} max={2500} step={100}
              fmt={v => "$" + v.toLocaleString()} />
            <Slider label="Insurance & licensing"
              value={insurance} setValue={setInsurance} min={200} max={1000} step={50}
              fmt={v => "$" + v.toLocaleString()} />
            <Slider label="Software & tools (GHL etc.)"
              value={software} setValue={setSoftware} min={100} max={800} step={50}
              fmt={v => "$" + v.toLocaleString()} />
            <Slider label="Misc / supplies / admin"
              value={misc} setValue={setMisc} min={100} max={800} step={50}
              fmt={v => "$" + v.toLocaleString()} />
            <div className="rounded-lg bg-gray-50 px-4 py-2.5 text-sm font-medium text-center text-gray-700 border border-gray-100">
              Fixed monthly: {usd(fixedMo)} &nbsp;·&nbsp; Annual: {usd(fixedMo * 12)}
            </div>
          </div>
        </div>
      )}

      {/* ── BREAK-EVEN TAB ────────────────────────────────────────────────── */}
      {activeTab === "breakeven" && (
        <div className="space-y-4">
          <div className={`rounded-xl border-2 p-6 text-center ${
            isOk ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"
          }`}>
            <div className="text-4xl mb-2">{isOk ? "✅" : "🔴"}</div>
            <div className={`text-xl font-semibold mb-1 ${isOk ? "text-green-800" : "text-red-700"}`}>
              {isOk ? "Breaking even" : "Not yet breaking even"}
            </div>
            <div className="text-sm text-gray-600">
              You need <strong>{beJobs} jobs/month</strong> to cover fixed costs.{" "}
              {isOk
                ? `Targeting ${j4} by Dec — ${j4 - beJobs} above break-even.`
                : `Targeting ${j4} by Dec — ${beJobs - j4} short.`}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <SectionHeader title="The math" />
            {[
              ["Avg revenue per job",         usd(avgJob),                      false],
              [`Less: materials (${matPct}%)`, `(${usd(avgJob * matPct / 100)})`, true],
              [`Less: labor (${labPct}%)`,     `(${usd(avgJob * labPct / 100)})`, true],
              [`Less: other COGS (${othPct}%)`,[`(${usd(avgJob * othPct / 100)})`], true],
            ].map(([label, val, neg], i) => (
              <div key={i} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                <span className="text-gray-500">{label as string}</span>
                <span className={neg ? "text-red-500 font-medium" : "font-medium"}>{val as string}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 border-t-2 border-gray-200 mt-1 text-sm font-semibold">
              <span>Contribution margin / job</span>
              <span className="text-green-700">{usd(contribMo)}</span>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <span className="text-gray-500">Total fixed monthly costs</span>
              <span className="font-medium">{usd(fixedMo)}</span>
            </div>
            <div className={`flex justify-between items-center mt-2 px-4 py-3 rounded-lg font-semibold ${
              isOk ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"
            }`}>
              <span>Break-even jobs / month</span>
              <span className="text-2xl">{beJobs}</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <SectionHeader title="Volume vs. break-even by phase" />
            {[
              { phase: "Jan–Feb (startup)", jobs: j1 },
              { phase: "Mar–Jun (growth)",  jobs: j2 },
              { phase: "Jul–Sep (peak)",    jobs: j3 },
              { phase: "Oct–Dec (target)",  jobs: j4 },
            ].map(({ phase, jobs }) => {
              const maxJobs = Math.max(j4, beJobs) * 1.3;
              const fillPct = Math.min((jobs / maxJobs) * 100, 100);
              const linePct = Math.min((beJobs / maxJobs) * 100, 98);
              const ok = jobs >= beJobs;
              return (
                <div key={phase} className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{phase}</span>
                    <span className={`font-semibold ${ok ? "text-green-700" : "text-red-600"}`}>
                      {jobs} jobs {ok ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="relative h-2.5 bg-gray-100 rounded-full overflow-visible">
                    <div className={`h-full rounded-full transition-all ${ok ? "bg-green-500" : "bg-red-400"}`}
                      style={{ width: `${fillPct}%` }} />
                    <div className="absolute top-0 bottom-0 w-0.5 bg-amber-500 z-10"
                      style={{ left: `${linePct}%` }} />
                  </div>
                </div>
              );
            })}
            <div className="text-xs text-gray-400 mt-2">
              Amber line = break-even at {beJobs} jobs/mo
            </div>
          </div>
        </div>
      )}

      {/* ── STARTUP TAB ───────────────────────────────────────────────────── */}
      {activeTab === "startup" && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <KpiCard label="Total budget" value={usd(totalStartup)} color="blue" />
            <KpiCard label="Funded"       value={usd(fundedStartup)} color="green" />
            <KpiCard label="Still needed" value={usd(totalStartup - fundedStartup)}
              color={fundedStartup < totalStartup ? "amber" : "green"} />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <SectionHeader title="Line items — edit amounts · check to mark funded" />
            <div className="space-y-2">
              {startupItems.map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  item.funded ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                }`}>
                  <input type="checkbox" checked={item.funded}
                    onChange={e => {
                      const updated = [...startupItems];
                      updated[i] = { ...item, funded: e.target.checked };
                      setStartupItems(updated);
                    }}
                    className="w-4 h-4 accent-green-600 flex-shrink-0"
                  />
                  <span className={`flex-1 text-sm ${item.funded ? "line-through text-gray-400" : "text-gray-700"}`}>
                    {item.label}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400">$</span>
                    <input type="number" value={item.amount}
                      onChange={e => {
                        const updated = [...startupItems];
                        updated[i] = { ...item, amount: Number(e.target.value) || 0 };
                        setStartupItems(updated);
                      }}
                      className="w-24 text-right text-sm font-medium border border-gray-200 rounded-lg px-2 py-1 bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>Funded</span>
                <span>{usd(fundedStartup)} / {usd(totalStartup)}</span>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full transition-all"
                  style={{ width: `${fundedPct}%` }} />
              </div>
              <div className="text-xs text-gray-500 mt-1">{fundedPct}% funded</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
