"use client";

import { RichTextEditor } from "./lib/tiptap";
import "./styles.css";

const Editor = () => {
  const content = "<p>Escreva aqui</p>";

  const submit = () => {
    const text = document.querySelector(".tiptap");
    console.log(text?.innerHTML);
  };

  return (
    <section className="container">
      <RichTextEditor content={content} />
      <button
        className="px-2 py-1 mt-2 font-medium rounded-sm bg-zinc-800 text-zinc-50"
        onClick={submit}
        type="button"
      >
        Salvar
      </button>
    </section>
  );
};

export default Editor;
