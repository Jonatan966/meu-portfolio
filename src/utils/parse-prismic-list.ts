export function parsePrismicList(list: any[]): any[] {
  const cloneList = []

  for (const listItemIndex in list) {
    const [, listItemContent] = Object.entries<any>(list[listItemIndex])[0]

    cloneList[listItemIndex] = {
      ...listItemContent.data,
      id: listItemContent.id,
    }
  }

  return cloneList
}
