export interface JsonP {
  method: 'POST',
  body: {
    title: 'foo',
    body: 'bar',
    userId: 1,
    },
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
