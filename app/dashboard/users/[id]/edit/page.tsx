import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/users/edit-user';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Users', href: '/dashboard/users', active: false },
                    {
                        label: 'Edit User',
                        href: '/dashboard/users/1/edit',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
