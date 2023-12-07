/* eslint-disable react/prop-types */
import './minimal-table.css'

export default function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(item =>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}