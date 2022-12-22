import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import iconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled (Badge)(({ theme }) => ({

'& .MuiBadge-badge' : {
    right: -3,
    top: 13,
    boreder: '2pc solid ${theme.palette.background.paper}',
    padding: '0 4px',
},
}));

function CartWidget() {
    return(
        <iconButton aria-label="cart">
            <StyledBadge badgeContent={4} color = "secondary">
                <ShoppingCartIcon color ="primary"/>
            </StyledBadge>



        </iconButton>
    )
}
export default CartWidget;