import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/ui/items/create-item";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Items", href: "/dashboard/items", active: false },
          {
            label: "Create Item",
            href: "/dashboard/items/create",
            active: true,
          },
        ]}
      />
      <Form />
    </>
  );
}
