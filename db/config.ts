import { defineDb, defineTable, column } from 'astro:db';

const Service = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    desc: column.text(),
    icon: column.text(),
    color: column.text(),
  }
});

const Portfolio = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    category: column.text(),
    img: column.text(),
  }
});

const Testimonial = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    role: column.text(),
    content: column.text(),
    avatar: column.text(),
  }
});

const Blog = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    category: column.text(),
    date: column.date(),
    img: column.text(),
    excerpt: column.text(),
    content: column.text(),
    author: column.text({ default: 'Admin' }),
  }
});

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    username: column.text({ unique: true }),
    password: column.text(),
    role: column.text(), // 'Super Admin', 'Admin', 'Editor'
  }
});

const GlobalSetting = defineTable({
  columns: {
    key: column.text({ primaryKey: true }),
    value: column.text(),
  }
});

const Message = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    service: column.text(),
    content: column.text(),
    created_at: column.date(),
  }
});

export default defineDb({
  tables: { Service, Portfolio, Testimonial, Blog, User, GlobalSetting, Message }
});
