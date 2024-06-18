const users = [
  { id: 1, name: "Alice", ratings: { 1: 5, 2: 3, 3: 4, 5: 4, 6: 2 } },
  { id: 2, name: "Bob", ratings: { 2: 5, 3: 4, 4: 2, 5: 3, 7: 5 } },
  { id: 3, name: "Charlie", ratings: { 1: 4, 3: 5, 4: 3, 6: 4, 8: 3 } },
  { id: 4, name: "David", ratings: { 1: 5, 2: 2, 5: 5, 7: 4, 9: 1 } },
  { id: 5, name: "Eve", ratings: { 2: 4, 4: 3, 6: 5, 7: 3, 8: 4, 10: 2 } },
  { id: 6, name: "Frank", ratings: { 1: 3, 3: 4, 5: 3, 6: 4, 9: 5, 10: 3 } },
  { id: 7, name: "Grace", ratings: { 2: 5, 4: 4, 5: 2, 8: 4, 9: 3 } },
  { id: 8, name: "Hank", ratings: { 1: 4, 2: 4, 3: 5, 7: 4, 8: 5, 10: 1 } },
  { id: 9, name: "Ivy", ratings: { 2: 3, 4: 5, 6: 4, 9: 2, 10: 4 } },
  { id: 10, name: "Jack", ratings: { 1: 5, 3: 4, 5: 5, 7: 4, 9: 3, 10: 2 } }
];

const products = [
  { id: 1, name: "Producto A" },
  { id: 2, name: "Producto B" },
  { id: 3, name: "Producto C" },
  { id: 4, name: "Producto D" },
  { id: 5, name: "Producto E" },
  { id: 6, name: "Producto F" },
  { id: 7, name: "Producto G" },
  { id: 8, name: "Producto H" },
  { id: 9, name: "Producto I" },
  { id: 10, name: "Producto J" }
];

const recomendacionesS = [

  {
    "Date": "2024-06-12 10:39:37.000",
    "Percentil_UpSell": "0.55",
    "ProductId": "890123",
    "UserId": "12596",
    "Id": "02obvWO2zfeIEnfor3VO"
  },
  {
    "Date": "2024-06-13 14:20:45.000",
    "Percentil_UpSell": "0.61",
    "ProductId": "890123",
    "UserId": "12596",
    "Id": "1BCdeFG2hIJKlmnoPQR"
  },
  {
    "Date": "2024-06-14 09:10:22.000",
    "Percentil_UpSell": "0.48",
    "ProductId": "890123",
    "UserId": "12596",
    "Id": "3xyzUVW4abcdEfghIJK"
  },

  {
    "Date": "2024-06-12 12:15:30.000",
    "Percentil_UpSell": "0.45",
    "ProductId": "678901",
    "UserId": "12597",
    "Id": "4pqrsTUV5mnopQRStuv"
  },
  {
    "Date": "2024-06-13 08:45:10.000",
    "Percentil_UpSell": "0.57",
    "ProductId": "789012",
    "UserId": "12598",
    "Id": "5ijklMNOP6qrstUVWX"
  },
  {
    "Date": "2024-06-14 16:20:50.000",
    "Percentil_UpSell": "0.62",
    "ProductId": "890123",
    "UserId": "12599",
    "Id": "6ghijKLmn7opqrSTUVW"
  },
  {
    "Date": "2024-06-15 11:30:25.000",
    "Percentil_UpSell": "0.49",
    "ProductId": "901234",
    "UserId": "12600",
    "Id": "7defghIJ8klmnOPQRST"
  },
  {
    "Date": "2024-06-16 09:55:40.000",
    "Percentil_UpSell": "0.53",
    "ProductId": "123456",
    "UserId": "12601",
    "Id": "8cdefGHI9mnopQRSTUV"
  }, {
    "Date": "2024-06-12 12:15:30.000",
    "Percentil_UpSell": "0.45",
    "ProductId": "678901",
    "UserId": "12597",
    "Id": "4pqrsTUV5mnopQRStuv"
  },
  {
    "Date": "2024-06-13 08:45:10.000",
    "Percentil_UpSell": "0.57",
    "ProductId": "789012",
    "UserId": "12598",
    "Id": "5ijklMNOP6qrstUVWX"
  },
  {
    "Date": "2024-06-14 16:20:50.000",
    "Percentil_UpSell": "0.62",
    "ProductId": "890123",
    "UserId": "12599",
    "Id": "6ghijKLmn7opqrSTUVW"
  },
  {
    "Date": "2024-06-15 11:30:25.000",
    "Percentil_UpSell": "0.49",
    "ProductId": "901234",
    "UserId": "12600",
    "Id": "7defghIJ8klmnOPQRST"
  },
  {
    "Date": "2024-06-16 09:55:40.000",
    "Percentil_UpSell": "0.53",
    "ProductId": "123456",
    "UserId": "12601",
    "Id": "8cdefGHI9mnopQRSTUV"
  },
  {
    "Date": "2024-06-12 10:39:37.000",
    "Percentil_UpSell": "0.55",
    "ProductId": "890123",
    "UserId": "12596",
    "Id": "02obvWO2zfeIEnfor3VO"
  },
  {
    "Date": "2024-06-13 14:20:45.000",
    "Percentil_UpSell": "0.61",
    "ProductId": "890123",
    "UserId": "16531",
    "Id": "1BCdeFG2hIJKlmnoPQR"
  },
  {
    "Date": "2024-06-14 09:10:22.000",
    "Percentil_UpSell": "0.48",
    "ProductId": "890123",
    "UserId": "13456",
    "Id": "3xyzUVW4abcdEfghIJK"
  },
  {
    "Date": "2024-06-15 11:25:53.000",
    "Percentil_UpSell": "0.72",
    "ProductId": "678901",
    "UserId": "19876",
    "Id": "4LMnopQR5stuvWXyZAB"
  },
  {
    "Date": "2024-06-16 16:45:37.000",
    "Percentil_UpSell": "0.63",
    "ProductId": "567890",
    "UserId": "17283",
    "Id": "5pQRstUV6wxyzABCdEF"
  }
];

module.exports = { users, products, recomendacionesS };

