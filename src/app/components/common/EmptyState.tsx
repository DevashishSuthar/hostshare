'use client';

import { useRouter } from 'next/navigation';

import Heading from './Heading';

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title = 'No exact matches',
    subtitle = 'Try changing or removing some of your filters.',
}) => {
    const router = useRouter();

    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
        </div>
    );
};

export default EmptyState;