// eslint-disable-next-line no-shadow
enum UserTableOptionsEnum {
  header = 'List',
  elementLoadingText = 'Loading...',
  elementLoadingSvgViewBox = '-10, -10, 50, 50',
  elementLoadingBackground = 'var(--el-color-info-light-8)',
  borderRadius = 'var(--el-border-radius-base)',
  tableMaxHeight = 410,
  tableColumnWidth = '80',
  svg = `
    <path class="path" d="
      M 30 15
      L 28 17
      M 25.61 25.61
      A 15 15, 0, 0, 1, 15 30
      A 15 15, 0, 1, 1, 27.99 7.5
      L 15 15
    " style="stroke-width = 4px; fill = rgba(0, 0, 0, 0)"/>
  `,
}

export default UserTableOptionsEnum;
