import React, { useState } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Box display="flex" border="1px solid #d9d9d9" justifyContent="space-between" alignItems="center" sx={{ padding: '8px 12px' }}>
      <IconButton onClick={handleDecrement} sx={{ marginRight: '7px' , color: '#000000'}}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1" sx={{ minWidth: '32px', textAlign: 'center',color: '#000000' }}>
        {quantity}
      </Typography>
      <IconButton onClick={handleIncrement} sx={{ marginLeft: '7px' , color: '#000000'}}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default ProductQuantitySelector;
