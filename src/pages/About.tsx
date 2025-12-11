import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    title: "Craftsmanship",
    description: "Every piece in our collection is carefully selected for its exceptional quality and attention to detail.",
  },
  {
    title: "Sustainability",
    description: "We partner with artisans and manufacturers who share our commitment to ethical and sustainable practices.",
  },
  {
    title: "Timelessness",
    description: "We believe in creating and curating pieces that transcend trends and stand the test of time.",
  },
  {
    title: "Community",
    description: "Building meaningful connections with our customers and the artisans who bring our vision to life.",
  },
];

const team = [
  {
    name: "Sophia Laurent",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Marcus Chen",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Emma Williams",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground">
              Founded in 2018, MAISON began with a simple vision: to curate a collection of 
              timeless pieces that celebrate exceptional craftsmanship and sustainable luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Our atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">
                Where Quality Meets Purpose
              </h2>
              <p className="text-muted-foreground">
                What started as a small boutique in Paris has grown into a global destination 
                for those who appreciate the finer things in life. Our journey has been guided 
                by an unwavering commitment to quality, sustainability, and timeless design.
              </p>
              <p className="text-muted-foreground">
                We work directly with artisans and manufacturers across the globe, from the 
                leather workshops of Tuscany to the textile mills of Japan. Each partnership 
                is built on shared values of excellence, fair trade, and environmental responsibility.
              </p>
              <p className="text-muted-foreground">
                Today, MAISON represents a curated lifestyle — one that values quality over 
                quantity, craftsmanship over mass production, and lasting beauty over fleeting trends.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              The passionate individuals behind MAISON
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-medium">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl font-heading font-semibold">6+</p>
              <p className="text-primary-foreground/80 mt-2">Years of Excellence</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-heading font-semibold">50K+</p>
              <p className="text-primary-foreground/80 mt-2">Happy Customers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-4xl md:text-5xl font-heading font-semibold">200+</p>
              <p className="text-primary-foreground/80 mt-2">Curated Products</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-4xl md:text-5xl font-heading font-semibold">40+</p>
              <p className="text-primary-foreground/80 mt-2">Countries Served</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
