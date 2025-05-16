'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't take our word for it. Hear from the businesses we've helped transform through technology.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 -top-8 opacity-20">
            <Quote className="h-16 w-16 text-primary" />
          </div>
          
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="w-full flex-shrink-0 border-none bg-transparent shadow-none"
                >
                  <CardContent className="pt-6">
                    <blockquote className="text-xl md:text-2xl font-medium italic mb-8 text-center">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <Avatar className="h-14 w-14 mb-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.title}, {testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>
          
          <div className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "AFK Byte transformed our digital presence with a stunning website and custom CRM that streamlined our operations. Their team's expertise and dedication were remarkable.",
    name: "Sarah Johnson",
    title: "CEO",
    company: "InnovateX",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "The mobile app developed by AFK Byte increased our customer engagement by 200%. Their strategic approach and technical excellence made all the difference.",
    name: "Michael Chen",
    title: "Marketing Director",
    company: "GlobalSystems",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "Working with AFK Byte on our cloud migration was seamless. Their team's expertise saved us time and money while improving our infrastructure's performance and security.",
    name: "Emily Rodriguez",
    title: "CTO",
    company: "DataFlow",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];