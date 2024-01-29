import React from "react";
import { motion } from "framer-motion";

const tableVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Bollywood = () => {
  return (
    <motion.div
      className="bg-black text-white min-h-screen "
      initial="hidden"
      animate="visible"
      variants={tableVariants}
    >
      <div className="">
       

        {/* Bollywood Classes */}
        <div className="mb-8 ">
        <h2 className="text-xl bg-gradient-to-tr from-yellow-400 to-red-400 w-1/4   rounded-sm p-1 mt-22">
          Bollywood Classes
        </h2>
          <motion.table
            className="min-w-full table-auto border-collapse"
            variants={tableVariants}
          >
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Day</th>
                <th className="border border-gray-500 p-2">Time</th>
                <th className="border border-gray-500 p-2">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 p-2">Every Thursday</td>
                <td className="border border-gray-500 p-2">6:30 To 7:30 pm</td>
                <td className="border border-gray-500 p-2">
                  $25/CLASS OR $80/MONTH
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Thursday</td>
                <td className="border border-gray-500 p-2">5:00 To 6:00 pm</td>
                <td className="border border-gray-500 p-2">
                  Prepaid for month $10/Class
                </td>
              </tr>
            </tbody>
          </motion.table>
        </div>

        {/* Adult Classes */}
        <div className="mb-8 ">
          <h3 className="text-xl font-semibold mb-2 bg-gradient-to-tr from-yellow-400 to-red-400 w-1/4">Bharatnatyam Classes</h3>
          <motion.table
            className="min-w-full table-auto border-collapse"
            variants={tableVariants}
          >
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Day</th>
                <th className="border border-gray-500 p-2">Time</th>
                <th className="border border-gray-500 p-2">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 p-2">Every Thursday</td>
                <td className="border border-gray-500 p-2">6:30 To 7:30 pm</td>
                <td className="border border-gray-500 p-2">
                  $25/CLASS OR $80/MONTH
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Thursday</td>
                <td className="border border-gray-500 p-2">5:00 To 6:00 pm</td>
                <td className="border border-gray-500 p-2">
                  Prepaid for month $10/Class
                </td>
                
              </tr>
              
            </tbody>
          </motion.table>
        </div>

     
        {/* Adult Classes */}
        <div className="mb-8 ">
          <h3 className="text-xl font-semibold mb-2 bg-gradient-to-tr from-yellow-400 to-red-400 w-1/4 items-center">Kids Bollywood/Bharatnatyam Classes</h3>
          <motion.table
            className="min-w-full table-auto border-collapse "
            variants={tableVariants}
          >
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Day</th>
                <th className="border border-gray-500 p-2">Time</th>
                <th className="border border-gray-500 p-2">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 p-2">Every Thursday</td>
                <td className="border border-gray-500 p-2">6:30 To 7:30 pm</td>
                <td className="border border-gray-500 p-2">
                  $25/CLASS OR $80/MONTH
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Thursday</td>
                <td className="border border-gray-500 p-2">5:00 To 6:00 pm</td>
                <td className="border border-gray-500 p-2">
                  Prepaid for month $10/Class
                </td>
              </tr>
            </tbody>
          </motion.table>
        </div>
      </div>
    </motion.div>
  );
};

export default Bollywood;
