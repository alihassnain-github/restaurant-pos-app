import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/users/create-user';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Users', href: '/dashboard/users', active: false },
                    {
                        label: 'Create User',
                        href: '/dashboard/users/create',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
