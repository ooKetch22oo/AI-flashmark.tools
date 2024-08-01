import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to AI-Powered Design Tool Suite</h1>
      <p class="mb-4">Enhance your design process with our intelligent tools:</p>
      <ul class="list-disc list-inside mb-4">
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
