export function getCount() {
  return (
    fetch('/api/v1/count')
    .then(res => res.json())
    .then(data => ({data}))
    .catch(err => ({err}))
  )
}

export function countIncrement() {
  return (
    fetch('/api/v1/count-inc')
    .then(res => res.json())
    .then(data => ({data}))
    .catch(err => ({err}))
  )
}

export function countDecrement() {
  return (
    fetch('/api/v1/count-dec')
    .then(res => res.json())
    .then(data => ({data}))
    .catch(err => ({err}))  
  )
}