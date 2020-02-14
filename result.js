const productData = [
    {
      productId: 1000,
      productName: 'Product 1000'
    },
    {
      productId: 1001,
      productName: 'Product 1001'
    }
  ];
  
  const stockData = [
    {
      productId: 1000,
      locationId: 1,
      stock: 21
    },
    {
      productId: 1000,
      locationId: 2,
      stock: 8
    },
    {
      productId: 1001,
      locationId: 1,
      stock: 4
    },
    {
      productId: 1001,
      locationId: 2,
      stock: 10
    }
  ];
  
  const locationData = [
    {
      locationId: 1,
      locationName: 'Location 1'
    },
    {
      locationId: 2,
      locationName: 'Location 2'
    }
  ];

  function resultObj(productDataList, stockDataList, locationDataList) {
      let result = [];
      productDataList.forEach(pd => {
          let product = {
              productName: pd.productName,
              stock: {
                  total: 0,
                  detail: []
              }
          };
          let stockList = stockDataList.filter(sd => sd.productId === pd.productId);
          if (stockList.length > 0) {
              stockList.forEach(sl => {
                  let location = locationDataList.find(ld => ld.locationId === sl.locationId);
                      let detail = {
                          locationName: location.locationName,
                          stock: sl.stock
                      }
                      product.stock.total += sl.stock;
                      product.stock.detail.push(detail);  
              })
          }
  
          result.push(product);
      });
      return result;
  }
  
  console.log('result = ', resultObj(productData, stockData, locationData));