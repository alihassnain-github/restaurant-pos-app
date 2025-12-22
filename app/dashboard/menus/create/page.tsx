import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/ui/menus/create-menu";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Menus", href: "/dashboard/menus", active: false },
          {
            label: "Create Menu",
            href: "/dashboard/menus/create",
            active: true,
          },
        ]}
      />
      <Form />
    </>
  );
}
