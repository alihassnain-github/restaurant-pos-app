import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/ui/tables/edit-table";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Tables", href: "/dashboard/tables ", active: false },
          {
            label: "Edit Table",
            href: "/dashboard/tables/1/edit",
            active: true,
          },
        ]}
      />
      <Form />
    </>
  );
}
