# Editor RihchText (WYSIWYG)

This is a [Next.js](https://nextjs.org/) project.

- Node version: 20.15.1
- Next version: 14.2.6
- TipTap version: 2.6.5
- Tailwindcss version: 3.4.1

You must copy the entire contents of the `editor` folder to your project, in addition to installing all dependencies in package.json (make sure to install the versions of the dependencies mentioned above to avoid compatibility errors).

### Editor folder:

```
/editor
    page.tsx
    styles.css
    /lib
        tiptap.tsx
```

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Import the **Editor** component to your project:

```
import Editor from "./editor/page";

const YourPage = () => {
  return (
    <main>
      <Editor />
    </main>
  );
};

export default YourPage;

```

That's it. Enjoy!

João Mozelli Neto.
