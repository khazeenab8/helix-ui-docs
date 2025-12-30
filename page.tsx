 import { DocShell } from "../components.docs/DocShell";
import { CodeBlock } from "../components.docs/CodeBlock";
import { PropsTable } from "../components.docs/PropsTable";

const usage = `export default function Example() {
  return (
    <div className="flex gap-3">
      <button className="rounded-lg bg-black px-4 py-2 text-white">Primary</button>
      <button className="rounded-lg bg-gray-100 px-4 py-2">Secondary</button>
      <button className="rounded-lg border px-4 py-2">Outline</button>
      <button className="rounded-lg bg-gray-200 px-4 py-2 text-gray-500" disabled>
        Disabled
      </button>
    </div>
  );
}`;

export default function ButtonPage() {
  return (
    <DocShell title="Button" description="Primary, secondary, outline, and disabled states.">
      {/* Preview */}
      <section className="rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold">Preview</h2>

        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-lg bg-black px-4 py-2 text-white">Primary</button>
          <button className="rounded-lg bg-gray-100 px-4 py-2">Secondary</button>
          <button className="rounded-lg border px-4 py-2">Outline</button>
          <button className="cursor-not-allowed rounded-lg bg-gray-200 px-4 py-2 text-gray-500" disabled>
            Disabled
          </button>
        </div>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold">Usage</h2>
        <CodeBlock code={usage} />
      </section>

      {/* Props */}
      <PropsTable
        rows={[
          { name: "children", type: "ReactNode", default: "-", description: "Button label/content." },
          { name: "variant", type: `"primary" | "secondary" | "outline"`, default: `"primary"`, description: "Visual style." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables the button." },
          { name: "onClick", type: "() => void", default: "-", description: "Click handler." },
        ]}
      />
    </DocShell>
  );
}
