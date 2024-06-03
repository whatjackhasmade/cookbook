"use client";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import History from "@tiptap/extension-history";

import * as Icons from "./Icons";

export default function Tiptap() {
	const editor = useEditor({
		extensions: [
			Document,
			History,
			Paragraph,
			Text,
			Bold,
			Italic,
			Strike,
			Code,
		],
		content: "",
	});

	if (!editor) return null;

	return (
		<div className="editor">
			<div className="menu">
				<button
					className="menu-button"
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().undo()}
				>
					<Icons.RotateLeft />
				</button>
				<button
					className="menu-button"
					onClick={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().redo()}
				>
					<Icons.RotateRight />
				</button>
				<button
					onClick={() => {
						editor.chain().focus().toggleBold().run();
					}}
				>
					<Icons.Bold />
				</button>
				<button
					onClick={() => {
						editor.chain().focus().toggleItalic().run();
					}}
				>
					<Icons.Italic />
				</button>
				<button
					onClick={() => {
						editor.chain().focus().toggleStrike().run();
					}}
				>
					<Icons.Strikethrough />
				</button>
			</div>

			<BubbleMenu
				className="bubble-menu-light"
				tippyOptions={{ duration: 150 }}
				editor={editor}
				shouldShow={({ editor, from, to }) => {
					// only show the bubble menu for links.
					return from === to && editor.isActive("link");
				}}
			>
				<></>
			</BubbleMenu>

			<EditorContent editor={editor} />
		</div>
	);
}
