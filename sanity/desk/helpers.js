import S from '@sanity/desk-tool/structure-builder'

export const singleton = (title, id) =>
	S.listItem()
		.title(title)
		.child(
			S.editor()
				.schemaType(id)
				.documentId(id)
		)
