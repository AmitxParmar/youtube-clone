import { Stack } from "@mui/material";

import { categories } from '../utils/constants';

const selectedCategory = "New";

const SideBar = () => (
    <Stack
        direction="row"
        sx={{
            overFlow: "auto",
            height: { sx: 'auto', md: "95%" },
            flexDirection: { md: 'column' },
        }}
    >
        {categories.map((category) => (
            <button className="category-btn" style={{
                background: category.name === selectedCategory && '#fc1503', 
                color: 'white'}}>
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}

    </Stack>
)


export default SideBar
