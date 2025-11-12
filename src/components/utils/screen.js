import { onBeforeMount, onBeforeUnmount } from 'vue'




const thresholds = reactive({
  xs: 640,
  sm: 768,
  md: 1024,
  lg: 1920
})

const getClientWidth = () => {
  if (typeof document === 'undefined') {
    return 0
  } // SSR
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
}

const getClientHeight = () => {
  if (typeof document === 'undefined') {
    return 0
  } // SSR
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
}

const scrollbarWidth = 16
const mobileBreakPoint = 1024
const resizeTimeout = ref<number | undefined>(undefined)
const clientHeight = ref(getClientHeight())
const clientWidth = ref(getClientWidth())
const isMobile = computed(() => {
  return clientWidth.value < mobileBreakPoint
})

const onResize = () => {
  clearTimeout(resizeTimeout.value)
  resizeTimeout.value = window.setTimeout(setDimensions, 200)
}

const setDimensions = () => {
  clientHeight.value = getClientHeight()
  clientWidth.value = getClientWidth()
}

export default () => {
  onBeforeMount(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.addEventListener('resize', onResize, { passive: true })
  })
  onBeforeUnmount(() => {
    if (typeof window === 'undefined') {
      return
    }

    window?.removeEventListener('resize', onResize)
  })
  return computed(() => {
    const xs = clientWidth.value < thresholds.xs
    const sm = clientWidth.value < thresholds.sm && !xs
    const md = clientWidth.value < thresholds.md - scrollbarWidth && !(sm || xs)
    const lg = clientWidth.value < thresholds.lg - scrollbarWidth && !(md || sm || xs)
    const xl = clientWidth.value >= thresholds.lg - scrollbarWidth

    const xsOnly = xs
    const smOnly = sm
    const smAndDown = (xs || sm) && !(md || lg || xl)
    const smAndUp = !xs && (sm || md || lg || xl)
    const mdOnly = md
    const mdAndDown = (xs || sm || md) && !(lg || xl)
    const mdAndUp = !(xs || sm) && (md || lg || xl)
    const lgOnly = lg
    const lgAndDown = (xs || sm || md || lg) && !xl
    const lgAndUp = !(xs || sm || md) && (lg || xl)
    const xlOnly = xl

    let name
    switch (true) {
      case xs:
        name = 'xs'
        break
      case sm:
        name = 'sm'
        break
      case md:
        name = 'md'
        break
      case lg:
        name = 'lg'
        break
      default:
        name = 'xl'
        break
    }

    return {
      // Definite breakpoint.
      xs,
      sm,
      md,
      lg,
      xl,

      // Useful e.g. to construct CSS class names dynamically.
      name,

      // Breakpoint ranges.
      xsOnly,
      smOnly,
      smAndDown,
      smAndUp,
      mdOnly,
      mdAndDown,
      mdAndUp,
      lgOnly,
      lgAndDown,
      lgAndUp,
      xlOnly,

      // For custom breakpoint logic.
      width: clientWidth.value,
      height: clientHeight.value,
      isMobile: isMobile.value,
      thresholds,
      scrollbarWidth
    }
  })
}
