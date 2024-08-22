"use client";

import { useCurrentEditor, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  List,
  Heading1,
  Heading2,
  Heading3,
  TextQuote,
  Anchor,
} from "lucide-react";

function MenuBar() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <div className="flex gap-1 mb-2">
      <button
        title="Cabeçalho nível 1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-2 py-1 rounded-md 
            ${editor.isActive("heading", { level: 1 }) ? "bg-zinc-500" : ""}`}
      >
        <Heading1 className="h-4 w-4" />
      </button>
      <button
        title="Cabeçalho nível 2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 py-1 rounded-md 
            ${editor.isActive("heading", { level: 2 }) ? "bg-zinc-500" : ""}`}
      >
        <Heading2 className="h-4 w-4" />
      </button>
      <button
        title="Cabeçalho nível 3"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-2 py-1 rounded-md 
            ${editor.isActive("heading", { level: 3 }) ? "bg-zinc-500" : ""}`}
      >
        <Heading3 className="h-4 w-4" />
      </button>
      <button
        title="Negrito"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded-md 
          ${editor.isActive("bold") ? "bg-zinc-500" : ""}`}
      >
        <Bold className="h-4 w-4" />
      </button>
      <button
        title="Itálico"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded-md 
          ${editor.isActive("italic") ? "bg-zinc-500" : ""}`}
      >
        <Italic className="h-4 w-4" />
      </button>
      <button
        title="Lista"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 rounded-md 
          ${editor.isActive("bulletList") ? "bg-zinc-500" : ""}`}
      >
        <List className="h-4 w-4" />
      </button>
      <button
        title="Citação"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-2 py-1 rounded-md 
            ${editor.isActive("blockquote") ? "bg-zinc-500" : ""}`}
      >
        <TextQuote className="h-4 w-4" />
      </button>
      <button
        title="Link"
        onClick={() => {
          const existingHref = editor.isActive("link")
            ? editor.getAttributes("link").href
            : "";
          let href = window.prompt("Endereço do link:", existingHref);
          if (href?.trim()) {
            editor.chain().focus().setLink({ href: href.trim() }).run();
          } else {
            editor.chain().focus().unsetLink().run();
          }
        }}
        className={`px-2 py-1 rounded-md 
          ${editor.isActive("link") ? "bg-zinc-500" : ""}`}
      >
        <Anchor className="h-4 w-4" />
      </button>
    </div>
  );
}

export const RichTextEditor = ({ content }: { content: string }) => {
  // const extensions = [StarterKit, Link.extend({ inclusive: false })];
  const extensions = [
    StarterKit,
    Link.configure({
      openOnClick: false,
      autolink: true,
      defaultProtocol: "https",
      HTMLAttributes: { title: "Link" },
    }),
  ];

  return (
    <div className="" id="meuEditor">
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        immediatelyRender={false}
      >
        <></>
      </EditorProvider>
    </div>
  );
};
//setContent: Dispatch<SetStateAction<string>>;
