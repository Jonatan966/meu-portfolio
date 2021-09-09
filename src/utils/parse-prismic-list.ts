export function parsePrismicList(list: any[], withId = true): any[] {
  const cloneList = []

  for (const listItemIndex in list) {
    const [, listItemContent] = Object.entries<any>(list[listItemIndex])[0]

    cloneList[listItemIndex] = {
      ...(listItemContent?.data || listItemContent),
    }

    if (withId) {
      cloneList[listItemIndex].id = listItemContent.id
    }
  }

  return cloneList
}
