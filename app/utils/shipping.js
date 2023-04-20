const MEASUREMENTS = {
  standard: {
    h: 9,
    w: 15,
    l: 22,
    wg: 1
  },
  large: {
    h: 9,
    w: 28,
    l: 35,
    wg: 1
  }
}

const criticalItems = []

const MINIMUM_DECLARED_VALUE = 10000

const assignPackageSize = (items = []) => {
  const isCritical = items.some((item) => criticalItems.includes(item.slug))
  return isCritical ? MEASUREMENTS.large : MEASUREMENTS.standard
}

export const calculateHeight = (items = []) => {
  const { h } = assignPackageSize(items)
  return parseInt(h)
}

export const calculateWidth = (items = []) => {
  const { w } = assignPackageSize(items)
  return parseInt(w)
}

export const calculateLength = (items = []) => {
  const { l } = assignPackageSize(items)
  return parseInt(l)
}

export const calculateWeight = () => {
  return parseInt(MEASUREMENTS.standard.wg)
}

export const calculateDeclaredValue = () => {
  return parseFloat(MINIMUM_DECLARED_VALUE)
}
