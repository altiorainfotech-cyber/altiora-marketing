import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export function scanPages(dir: string, baseDir: string = ''): string[] {
  const pages: string[] = []
  
  try {
    const items = readdirSync(dir)
    
    for (const item of items) {
      const fullPath = join(dir, item)
      const stat = statSync(fullPath)
      
      if (stat.isDirectory() && !item.startsWith('_') && item !== 'api') {
        const route = baseDir ? `${baseDir}/${item}` : `/${item}`
        
        // Check if directory has page.tsx or page.js
        const hasPage = ['page.tsx', 'page.js'].some(file => {
          try {
            return statSync(join(fullPath, file)).isFile()
          } catch {
            return false
          }
        })
        
        if (hasPage) pages.push(route)
        
        // Recursively scan subdirectories
        pages.push(...scanPages(fullPath, route))
      }
    }
  } catch (error) {
    console.error('Error scanning pages:', error)
  }
  
  return pages
}