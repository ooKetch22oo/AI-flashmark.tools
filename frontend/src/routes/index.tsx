import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to AI-Powered Design Tool Suite</h1>
      <p style={{ marginBottom: '1rem' }}>Enhance your design process with our intelligent tools:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
        <li>Profiler: Generate detailed user personas</li>
        <li>Perception: Conduct comprehensive brand audits</li>
        <li>Probe: Perform in-depth competitive analysis</li>
        <li>Personality: Build and maintain consistent brand guidelines</li>
      </ul>
      <p>Get started by exploring our tools and revolutionize your design workflow!</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "AI-Powered Design Tool Suite",
  meta: [
    {
      name: "description",
      content: "Enhance your design process with AI-powered tools for user profiling, brand auditing, competitive analysis, and brand building.",
    },
  ],
};
