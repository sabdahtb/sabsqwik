import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchOneEntry, Content } from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "~/components/builder-registry";

export const BUILDER_MODEL = "page";

// Define a route loader function that loads
// content from Builder based on the URL.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useBuilderContent = routeLoader$(async ({ url, error }) => {
  // Fetch content for the specified model using the API key.
  const builderContent = await fetchOneEntry({
    model: BUILDER_MODEL,
    apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
  });

  // Return the fetched content.
  return builderContent;
});

export default component$(() => {
  const content = useBuilderContent();

  // RenderContent uses `content` to
  // render the content of the given model, here a page,
  // of your space (specified by the API Key)
  return (
    <Content
      model={BUILDER_MODEL}
      content={content.value}
      apiKey={import.meta.env.PUBLIC_BUILDER_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
    />
  );
});
