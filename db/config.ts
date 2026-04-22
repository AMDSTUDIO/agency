import { defineDb, defineTable, column } from 'astro:db';

const Client = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    logo: column.text(),
  }
});


const Service = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    desc: column.text(),
    icon: column.text(),
    color: column.text(),
    img: column.text({ optional: true }),
    capabilities: column.text({ optional: true }),
  }
});

const Portfolio = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    category: column.text(),
    img: column.text(),
    content: column.text({ optional: true }),
    focus: column.text({ optional: true }),
    metric: column.text({ optional: true }),
  }
});

const Testimonial = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    role: column.text(),
    content: column.text(),
    avatar: column.text(),
    cover: column.text({ optional: true }),
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
  tables: { Service, Portfolio, Testimonial, Blog, User, GlobalSetting, Message, Client }
});
