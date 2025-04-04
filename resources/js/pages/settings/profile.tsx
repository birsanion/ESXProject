import { type BreadcrumbItem, type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile',
        href: '/settings/profile',
    },
];

export default function Profile() {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <SettingsLayout>
                <div className="space-y-6">
                    <div className="relative">
                        <dt className="font-semibold text-gray-900">Name</dt>
                        <dd>{ auth.user.name }</dd>
                    </div>
                    <div className="relative">
                        <dt className="font-semibold text-gray-900">Email</dt>
                        <dd>{ auth.user.email }</dd>
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
