import type { ServiceType, Cleaner } from './types';
import { DeepCleanIcon, CarpetIcon, KitchenIcon, BathroomIcon, WindowIcon, OfficeIcon } from './components/icons';

export const SERVICES_DATA: ServiceType[] = [
    { id: 'deep-cleaning', title: 'Deep Cleaning', description: 'A thorough cleaning of your entire home, top to bottom.', icon: DeepCleanIcon, price: '' },
    { id: 'carpet-cleaning', title: 'Carpet Cleaning', description: 'Professional steam cleaning for your carpets.', icon: CarpetIcon, price: '' },
    { id: 'kitchen-cleaning', title: 'Kitchen Cleaning', description: 'We sanitize all surfaces and clean appliances.', icon: KitchenIcon, price: '' },
    { id: 'bathroom-cleaning', title: 'Bathroom Cleaning', description: 'A complete disinfection and cleaning of bathrooms.', icon: BathroomIcon, price: '$100' },
    { id: 'window-cleaning', title: 'Window Cleaning', description: 'Streak-free cleaning for all interior and exterior windows.', icon: WindowIcon, price: '$150' },
    { id: 'office-cleaning', title: 'Office Cleaning', description: 'Customized cleaning plans for commercial spaces.', icon: OfficeIcon, price: 'Contact for Quote' },
];

export const HOUSE_CLEANER: Cleaner = {
    name: "Tania Intriago", role: "Founder & Head Cleaner", bio: "With over years of expertise in transforming spaces, I founded SparkleClean out of a genuine passion for turning homes and workplaces into fresh, vibrant, and healthy environments. For me, it’s more than cleaning—it’s about creating a sparkle that inspires comfort, clarity, and joy.", imageUrl: "./picture/pic1.jpg", contact: "+14752080329",
};

