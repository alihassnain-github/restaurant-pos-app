import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/roles/add-role';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Roles', href: '/dashboard/roles', active: false },
                    {
                        label: 'Create Role',
                        href: '/dashboard/roles/add',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
