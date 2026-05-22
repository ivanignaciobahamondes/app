import { execSync } from 'child_process'

const message = process.argv[2] || `update ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`

try {
  execSync('git add .', { stdio: 'inherit' })
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' })
} catch {
  console.log('Nada nuevo para sincronizar.')
}
