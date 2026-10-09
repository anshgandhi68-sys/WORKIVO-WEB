'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './services.module.css';

type Service = {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  icon: string;
  img: string;
};

const initialServices: Service[] = [
  {
    id: '1',
    slug: 'electrician',
    title: 'Electrician',
    category: 'Repairs & Maintenance',
    shortDescription: 'Switches, wiring and fittings sorted safely in your home by verified electricians.',
    icon: '⚡',
    img: '/images/services/electrician.jpg'
  },
  {
    id: '2',
    slug: 'home-cooking',
    title: 'Home Cooking',
    category: 'Household Support',
    shortDescription: 'A professional cook in your kitchen, for delicious everyday meals to special family gatherings.',
    icon: '🍳',
    img: '/images/services/chef.jpg'
  },
  {
    id: '3',
    slug: 'barber-at-home',
    title: 'Barber at Home',
    category: 'Grooming & Wellness',
    shortDescription: 'Fresh haircuts and grooming in comfort without leaving your home or waiting in salon queues.',
    icon: '✂️',
    img: '/images/services/barber.jpg'
  },
  {
    id: '4',
    slug: 'nails-and-beauty',
    title: 'Nails & Beauty',
    category: 'Grooming & Wellness',
    shortDescription: 'Relaxing manicure, pedicure, and beauty care performed at home by certified specialists.',
    icon: '💅',
    img: '/images/services/beauty.jpg'
  },
  {
    id: '5',
    slug: 'furniture-repair',
    title: 'Furniture Repair & Assembly',
    category: 'Carpentry & Assembly',
    shortDescription: 'Wobbly chairs, custom fitting, and wooden furniture assembly fixed by experienced carpenters.',
    icon: '🪑',
    img: '/images/services/carpenter.jpg'
  },
  {
    id: '6',
    slug: 'plumbing',
    title: 'Plumbing Services',
    category: 'Repairs & Maintenance',
    shortDescription: 'Leaks, taps, pipe replacements and drain blockages resolved cleanly and efficiently.',
    icon: '🔧',
    img: '/images/services/plumbing.jpg'
  },
  {
    id: '7',
    slug: 'home-cleaning',
    title: 'Deep Home Cleaning',
    category: 'Cleaning & Wash',
    shortDescription: 'Deep kitchen cleaning, dish washing, bathroom sanitization and full home refresh.',
    icon: '🧹',
    img: '/images/services/cleaning.jpg'
  },
  {
    id: '8',
    slug: 'ac-repair',
    title: 'AC Service & Repair',
    category: 'Repairs & Maintenance',
    shortDescription: 'Air conditioner filter cleaning, gas refill, and cooling system maintenance.',
    icon: '❄️',
    img: '/images/services/ac.jpg'
  },
  {
    id: '9',
    slug: 'packers-and-movers',
    title: 'Packers & Movers',
    category: 'Shifting & Relocation',
    shortDescription: 'Careful packing, safe loading, and hassle-free household shifting by professional teams.',
    icon: '📦',
    img: '/images/services/movers.jpg'
  },
  {
    id: '10',
    slug: 'laundry',
    title: 'Laundry & Dry Clean',
    category: 'Cleaning & Wash',
    shortDescription: 'Washing, steam pressing and fabric care delivered fresh back to your doorstep.',
    icon: '👕',
    img: '/images/services/laundry.jpg'
  }
];

export default function ServicesPage() {
  const [services] = useState<Service[]>(initialServices);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Repairs & Maintenance', 'Household Support', 'Grooming & Wellness', 'Carpentry & Assembly', 'Cleaning & Wash'];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <>
      <Navigation />
      
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1>Our Services</h1>
            <p>Everyday household services delivered right to your doorstep by verified pros.</p>
          </header>

          {/* Category Filter Tabs */}
          <div className={styles.categories}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.catBtn} ${activeCategory === cat ? styles.catActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredServices.map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.cardImgWrap}>
                  <img src={service.img} alt={service.title} className={styles.cardImg} />
                  <span className={styles.iconBadge}>{service.icon}</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.category}>{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <div className={styles.cardAction}>
                    <Link href={`/services/${service.slug}`} className="btn">
                      Book Service →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
