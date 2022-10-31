import React from 'react'

export default function columns() {
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">S no.</th>
      <th scope="col">Events</th>
      <th scope="col">Notification</th>
      <th scope="col">News</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Event 1</td>
      <td>Event 1</td>
      <td>Event 3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Event 1</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Event 1</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
       
      
    </div>
  )
}
