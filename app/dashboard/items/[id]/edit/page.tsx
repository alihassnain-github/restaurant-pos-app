import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/ui/items/edit-item";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Items", href: "/dashboard/items", active: false },
          {
            label: "Edit Item",
            href: "/dashboard/items/1/edit",
            active: true,
          },
        ]}
      />
      <Form />
    </>
  );
}
