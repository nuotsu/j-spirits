import S from '@sanity/desk-tool/structure-builder'

export const singleton = (title, id) =>
	S.listItem()
		.title(title)
		.child(
			S.editor()
				.schemaType(id)
				.documentId(id)
		)

export const list = (title, id) =>
	S.documentTypeListItem(id)
		.title(title)

export const group = (title, list) =>
	S.listItem()
		.title(title)
		.child(
			S.list()
				.title(title)
				.items(list)
		)
