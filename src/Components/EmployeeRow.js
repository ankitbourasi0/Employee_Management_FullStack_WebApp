import React from 'react'

const EmployeeRow = ({employee}) => {
  return (
<tr>
              <td className="text-left py-4 px-6 whitespace-nowrap ">
                <div className="text-sm text-gray-500">{employee.firstName}</div>
              </td>
              <td className="text-left py-4 px-6 whitespace-nowrap ">
                <div className="text-sm text-gray-500">{employee.lastName}</div>
              </td>
              <td className="text-left py-4 px-6 whitespace-nowrap ">
                <div className="text-sm text-gray-500">{employee.emailId}</div>
              </td>
              <td className="text-right py-4 px-6 whitespace-nowrap font-medium text-sm ">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 px=4">Delete</a>

              </td>
            </tr>
  )
}

export default EmployeeRow