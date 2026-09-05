import React, { useMemo, useState } from "react";

type Page = "Dashboard" | "Incidents" | "Analytics" | "Settings" | "Frame1";
type Range = "1h" | "6h" | "24h";

type Incident = {
  severity: "Critical" | "High" | "Medium" | "Low";
  message: string;
  service: string;
  time: string;
};

const pageOrder: Page[] = [
  "Dashboard",
  "Incidents",
  "Analytics",
  "Settings",
  "Frame1",
];

const baseIncidents: Incident[] = [
  { severity: "Critical", message: "Database connection failed", service: "Payment Service", time: "10:32 AM" },
  { severity: "High", message: "CPU usage high", service: "Server Cluster", time: "10:31 AM" },
  { severity: "Medium", message: "API request timeout", service: "API Gateway", time: "10:30 AM" },
  { severity: "Low", message: "Authentication failure", service: "Auth Service", time: "10:29 AM" },
  { severity: "High", message: "Memory usage high", service: "User Service", time: "10:28 AM" },
];

const baseData: Record<Range, number[]> = {
  "1h": [120, 160, 145, 210, 190, 260, 235, 310, 295, 360, 340, 390],
  "6h": [180, 210, 240, 220, 280, 310, 295, 350, 390, 365, 420, 460],
  "24h": [220, 180, 260, 240, 310, 290, 360, 330, 400, 370, 450, 500],
};

const sourceData = [
  ["Web Application", 520],
  ["API Gateway", 312],
  ["Database", 210],
  ["Authentication", 126],
  ["Other", 80],
] as const;

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#CDDDFC] text-[#5D88FF]">{children}</span>;
}

function MetricCard({
  title,
  value,
  change,
  icon,
  positive = true,
}: {
  title: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  positive?: boolean;
}) {
  return (
    <div className="flex-1 rounded-[10px] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-4">
          <Icon>{icon}</Icon>
          <div>
            <div className="text-[13px] font-bold text-[#100F0F]">{title}</div>
            <div className="mt-3 text-2xl font-bold text-[#141313]">{value}</div>
          </div>
        </div>
        <div className="text-xs text-gray-400">live</div>
      </div>
      <div className={`mt-4 text-[11px] ${positive ? "text-[#37C81A]" : "text-[#F44949]"}`}>{change}</div>
    </div>
  );
}

function Chart({
  values,
  compact = false,
}: {
  values: number[];
  compact?: boolean;
}) {
  const width = 700;
  const height = compact ? 160 : 250;
  const max = Math.max(...values, 500);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - (value / max) * (height - 24) - 8;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className={`w-full overflow-hidden ${compact ? "h-[180px]" : "h-[270px]"}`}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" preserveAspectRatio="none">
        {[0.2, 0.4, 0.6, 0.8, 1].map((fraction) => (
          <line
            key={fraction}
            x1="0"
            x2={width}
            y1={height - fraction * (height - 24)}
            y2={height - fraction * (height - 24)}
            stroke="#D5CECE"
            strokeWidth="1"
          />
        ))}
        <polyline fill="none" stroke="#C70A0A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" points={points} />
        <polyline
          fill="none"
          stroke="#2CA014"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={values.map((v, i) => `${(i / (values.length - 1)) * width},${height - (Math.max(0, v - 35) / max) * (height - 24) - 8}`).join(" ")}
        />
      </svg>
    </div>
  );
}

function SeverityBadge({ severity }: { severity: Incident["severity"] }) {
  const classes: Record<Incident["severity"], string> = {
    Critical: "bg-[#FFBFBF] text-[#C70A0A]",
    High: "bg-[#F7C9A3] text-[#FF9D4C]",
    Medium: "bg-[#F8E9A3] text-[#A38605]",
    Low: "bg-[#CDDDFC] text-[#5D88FF]",
  };
  return <span className={`rounded-full px-3 py-1 text-xs ${classes[severity]}`}>{severity}</span>;
}

function Header({ page, onPage }: { page: Page; onPage: (page: Page) => void }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center border-b border-[#5D88FF] bg-[#CDDDFC] px-5 shadow-sm">
      <button onClick={() => onPage("Dashboard")} className="mr-10 flex items-center gap-3 text-left">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5D88FF] text-xl font-bold text-white">AG</div>
        <div>
          <div className="text-2xl font-bold text-black">AlertGuard</div>
          <div className="text-xs text-[#05001F]">Intelligent Alert Noise Filter</div>
        </div>
      </button>

      <div className="flex-1">
        <div className="text-2xl text-black">{page}</div>
        <div className="text-xs text-[#05001F]">Insights and trends from your alert data</div>
      </div>

      <button
        onClick={() => alert("Refresh completed")}
        className="mr-3 rounded-lg bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-gray-50"
      >
        ↻ Refresh
      </button>

      <div className="relative">
        <button
          onClick={() => setShowProfile((v) => !v)}
          className="flex items-center gap-3 rounded-xl bg-white px-4 py-2 text-left shadow-sm"
        >
          <div>
            <div className="text-xs font-medium">Team User</div>
            <div className="text-xs text-[#37C81A]">● Online</div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5D88FF] font-bold text-white">TU</div>
        </button>
        {showProfile && (
          <div className="absolute right-0 mt-2 w-44 rounded-xl border bg-white p-2 shadow-lg">
            <button onClick={() => onPage("Settings")} className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[#EDF3FF]">
              Account settings
            </button>
            <button onClick={() => setShowProfile(false)} className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[#EDF3FF]">
              Close
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

function Sidebar({ page, onPage }: { page: Page; onPage: (page: Page) => void }) {
  return (
    <aside className="w-[250px] shrink-0 bg-[#EDF3FF] p-4">
      <div className="mb-5 rounded-xl bg-white p-3">
        <div className="mb-2 text-xs font-semibold uppercase text-gray-400">Navigation</div>
        {pageOrder.map((item, index) => (
          <button
            key={item}
            onClick={() => onPage(item)}
            className={`mb-2 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition ${
              page === item ? "bg-[#5D88FF] text-white shadow-sm" : "text-[#141313] hover:bg-[#CDDDFC]"
            }`}
          >
            <span>{index + 1}. {item}</span>
            <span>›</span>
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-white p-4 text-sm">
        <div className="font-bold">Demo mode</div>
        <p className="mt-1 text-xs text-gray-500">Use dummy values on Analytics to simulate changing data.</p>
      </div>
    </aside>
  );
}

function Dashboard({ onPage, useDummy }: { onPage: (page: Page) => void; useDummy: boolean }) {
  const metrics = useDummy
    ? { alerts: 500, suppressed: 492, incidents: 8, reduction: "98.4%" }
    : { alerts: 0, suppressed: 0, incidents: 0, reduction: "0%" };

  return (
    <div className="space-y-5 p-6">
      <div className="grid grid-cols-4 gap-4">
        <MetricCard title="Total Alerts" value={metrics.alerts} change={useDummy ? "+12% from last hour" : "Waiting for data"} icon="!" />
        <MetricCard title="Alerts Suppressed" value={metrics.suppressed} change={useDummy ? "+14% from last hour" : "Waiting for data"} icon="✓" />
        <MetricCard title="Active Incidents" value={metrics.incidents} change={useDummy ? "20% from last hour" : "Waiting for data"} icon="!" positive={false} />
        <MetricCard title="Noise Reduction" value={metrics.reduction} change={useDummy ? "+2.1% from last hour" : "Waiting for data"} icon="≋" />
      </div>

      <div className="grid grid-cols-[1.5fr_1fr] gap-5">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-bold">Alert Activity</h2>
              <p className="text-xs text-gray-400">Incoming vs processed alerts</p>
            </div>
            <button onClick={() => onPage("Analytics")} className="text-sm font-bold text-[#5D88FF]">Open analytics →</button>
          </div>
          <Chart values={useDummy ? baseData["1h"] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-5 font-bold">Top Alert Categories</h2>
          {[
            ["Database Connection", 48],
            ["CPU Usage High", 24],
            ["API Timeout", 17],
            ["Authentication", 11],
          ].map(([name, value]) => (
            <div key={name} className="mb-4">
              <div className="mb-1 flex justify-between text-xs">
                <span>{name}</span><span className="font-bold">{value}%</span>
              </div>
              <div className="h-3 rounded-full bg-[#EDF3FF]">
                <div className="h-3 rounded-full bg-[#8A38F5]" style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Incidents({ useDummy }: { useDummy: boolean }) {
  const [filter, setFilter] = useState<Incident["severity"] | "All">("All");
  const incidents = useDummy ? baseIncidents : [];
  const filtered = filter === "All" ? incidents : incidents.filter((x) => x.severity === filter);

  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Incidents</h2>
          <p className="text-sm text-gray-500">Review and filter active alerts.</p>
        </div>
        <div className="flex gap-2">
          {(["All", "Critical", "High", "Medium", "Low"] as const).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-3 py-2 text-xs ${filter === item ? "bg-[#5D88FF] text-white" : "bg-white text-gray-700 shadow-sm"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="grid grid-cols-[130px_1fr_180px_120px] gap-4 bg-[#EDF3FF] px-5 py-3 text-xs font-bold">
          <span>Severity</span><span>Alert Message</span><span>Service</span><span>Time</span>
        </div>
        {filtered.length ? filtered.map((incident, i) => (
          <button
            key={`${incident.message}-${i}`}
            onClick={() => alert(`${incident.message} — ${incident.service}`)}
            className="grid w-full grid-cols-[130px_1fr_180px_120px] gap-4 border-t px-5 py-4 text-left text-xs transition hover:bg-[#F7F9FF]"
          >
            <span><SeverityBadge severity={incident.severity} /></span>
            <span>{incident.message}</span>
            <span>{incident.service}</span>
            <span>{incident.time}</span>
          </button>
        )) : (
          <div className="p-10 text-center text-sm text-gray-500">No incident data. Turn on Dummy Values to populate this page.</div>
        )}
      </div>
    </div>
  );
}

function Analytics({ useDummy, setUseDummy }: { useDummy: boolean; setUseDummy: (value: boolean) => void }) {
  const [range, setRange] = useState<Range>("1h");
  const [seed, setSeed] = useState(0);

  const values = useMemo(() => {
    if (!useDummy) return baseData[range].map(() => 0);
    return baseData[range].map((v, i) => Math.max(0, Math.round(v + Math.sin(i * 1.7 + seed) * 35 + (seed % 4) * 8)));
  }, [range, seed, useDummy]);

  const total = values.reduce((a, b) => a + b, 0);
  const peak = Math.max(...values);
  const average = Math.round(total / values.length);
  const suppressed = useDummy ? Math.round(total * 0.984) : 0;

  return (
    <div className="space-y-5 p-6">
      <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
        <div>
          <div className="font-bold">Data source</div>
          <div className="text-xs text-gray-500">{useDummy ? "Dummy data is active. Charts update from simulated values." : "No live data connected."}</div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setUseDummy(!useDummy)}
            className={`rounded-lg px-4 py-2 text-sm font-bold ${useDummy ? "bg-[#5D88FF] text-white" : "bg-[#EDF3FF] text-[#5D88FF]"}`}
          >
            {useDummy ? "✓ Show Dummy Values" : "Get / Show Dummy Values"}
          </button>
          {useDummy && (
            <button onClick={() => setSeed((x) => x + 1)} className="rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
              ↻ Regenerate
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard title="Total Alerts" value={useDummy ? 500 + (seed % 5) * 17 : 0} change={useDummy ? "12% from last hour" : "No data"} icon="!" />
        <MetricCard title="Alerts Suppressed" value={suppressed || 0} change={useDummy ? "14% from last hour" : "No data"} icon="✓" />
        <MetricCard title="Active Incidents" value={useDummy ? 8 + (seed % 4) : 0} change={useDummy ? "20% from last hour" : "No data"} icon="!" positive={false} />
        <MetricCard title="Noise Reduction" value={useDummy ? "98.4%" : "0%"} change={useDummy ? "2.1% from last hour" : "No data"} icon="≋" />
      </div>

      <div className="grid grid-cols-[1.55fr_1fr] gap-5">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="font-bold">Alert Activity</h2>
              <p className="text-xs text-gray-500">Incoming alerts and processed alerts</p>
            </div>
            <div className="flex rounded-lg bg-[#EDF3FF] p-1">
              {([["1h", "Last 1 Hour"], ["6h", "Last 6 Hours"], ["24h", "Last 24 Hours"]] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setRange(key)}
                  className={`rounded-md px-3 py-2 text-xs ${range === key ? "bg-[#5D88FF] text-white" : "bg-transparent text-[#141313]"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-2 flex justify-end gap-5 text-[10px]">
            <span>▰ Incoming Alerts</span>
            <span>▰ Processed Alerts</span>
          </div>
          <Chart values={values} />
          <div className="mt-2 grid grid-cols-6 text-[10px] text-gray-500">
            {["10:00", "10:10", "10:20", "10:30", "10:40", "11:00"].map((x) => <span key={x}>{x}</span>)}
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold">Top Alert Categories</h2>
          <div className="mb-6 rounded-xl bg-[#EDF3FF] p-6 text-center">
            <div className="text-4xl font-bold">{useDummy ? 500 + (seed % 5) * 17 : 0}</div>
            <div className="text-sm font-bold">Total Alerts</div>
          </div>
          {[
            ["Database Connection", 48, 240],
            ["CPU Usage High", 24, 120],
            ["API Timeout", 17, 85],
            ["Authentication", 11, 55],
          ].map(([name, percent, count]) => (
            <div key={name} className="mb-4">
              <div className="mb-1 flex justify-between text-xs font-bold"><span>{name}</span><span>{useDummy ? `${percent}% (${count})` : "0%"}</span></div>
              <div className="h-3 rounded-full bg-[#EDF3FF]">
                <div className="h-3 rounded-full bg-[#8A38F5] transition-all duration-500" style={{ width: `${useDummy ? percent : 0}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-xl border border-[#5D88FF] bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-bold">Top Sources</h2>
            <button onClick={() => alert("Showing all sources")} className="text-sm font-bold text-[#5D88FF]">View all</button>
          </div>
          {sourceData.map(([name, value]) => (
            <div key={name} className="mb-4 flex items-center gap-3 text-sm">
              <span className="w-32">{name}</span>
              <div className="flex-1 rounded-full bg-[#CDDDFC]">
                <div className="h-6 rounded-full bg-[#8A38F5] transition-all duration-500" style={{ width: `${useDummy ? Math.min(100, value / 5.2) : 0}%` }} />
              </div>
              <span className="w-10 text-right">{useDummy ? value : 0}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[#5D88FF] bg-white p-5">
          <h2 className="mb-5 font-bold">Calculated Deviations</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-[#EDF3FF] p-4">
              <div className="text-xs text-gray-500">Average</div>
              <div className="mt-2 text-xl font-bold">{useDummy ? average : 0}</div>
            </div>
            <div className="rounded-xl bg-[#EDF3FF] p-4">
              <div className="text-xs text-gray-500">Peak</div>
              <div className="mt-2 text-xl font-bold">{useDummy ? peak : 0}</div>
            </div>
            <div className="rounded-xl bg-[#EDF3FF] p-4">
              <div className="text-xs text-gray-500">Peak deviation</div>
              <div className="mt-2 text-xl font-bold">{useDummy ? `+${peak - average}` : "0"}</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">Change the time range or regenerate dummy values to see the chart and calculated values update.</p>
        </div>
      </div>
    </div>
  );
}

function Settings({ useDummy, setUseDummy }: { useDummy: boolean; setUseDummy: (value: boolean) => void }) {
  const [notifications, setNotifications] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  return (
    <div className="p-6">
      <div className="max-w-3xl rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Settings</h2>
        <p className="mt-1 text-sm text-gray-500">Control how AlertGuard behaves in this demo.</p>

        <div className="mt-6 space-y-4">
          {[
            ["Dummy data", useDummy, setUseDummy, "Populate dashboard and analytics with simulated values."],
            ["Notifications", notifications, setNotifications, "Show alert notifications in the interface."],
            ["Auto refresh", autoRefresh, setAutoRefresh, "Simulate automatic data refresh."],
          ].map(([label, value, setter, description]) => (
            <div key={label as string} className="flex items-center justify-between rounded-xl border p-4">
              <div>
                <div className="font-bold">{label as string}</div>
                <div className="text-xs text-gray-500">{description as string}</div>
              </div>
              <button
                onClick={() => (setter as (value: boolean) => void)(!(value as boolean))}
                className={`relative h-7 w-12 rounded-full transition ${value ? "bg-[#5D88FF]" : "bg-gray-300"}`}
              >
                <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${value ? "left-6" : "left-1"}`} />
              </button>
            </div>
          ))}
        </div>

        <button onClick={() => alert("Settings saved")} className="mt-6 rounded-lg bg-[#5D88FF] px-5 py-3 text-sm font-bold text-white">
          Save settings
        </button>
      </div>
    </div>
  );
}

function Frame1() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="flex min-h-[600px] items-center justify-center p-8">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#CDDDFC] text-3xl">⚡</div>
        <h2 className="mt-5 text-3xl font-bold">AlertGuard Control Center</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
          A fifth interactive screen for controls and quick actions. Use the button below to simulate alert processing.
        </p>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`mt-7 rounded-xl px-6 py-3 font-bold ${enabled ? "bg-[#5D88FF] text-white" : "bg-gray-200 text-gray-700"}`}
        >
          {enabled ? "Alert processing enabled" : "Alert processing paused"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("Dashboard");
  const [useDummy, setUseDummy] = useState(true);

  const content = {
    Dashboard: <Dashboard onPage={setPage} useDummy={useDummy} />,
    Incidents: <Incidents useDummy={useDummy} />,
    Analytics: <Analytics useDummy={useDummy} setUseDummy={setUseDummy} />,
    Settings: <Settings useDummy={useDummy} setUseDummy={setUseDummy} />,
    Frame1: <Frame1 />,
  }[page];

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-[#141313]">
      <Header page={page} onPage={setPage} />
      <div className="flex min-h-[calc(100vh-80px)]">
        <Sidebar page={page} onPage={setPage} />
        <main className="min-w-0 flex-1 overflow-auto">{content}</main>
      </div>
    </div>
  );
}
