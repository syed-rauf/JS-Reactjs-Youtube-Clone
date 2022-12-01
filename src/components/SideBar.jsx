import React from "react";
import { Stack } from "@mui/system";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            sx={{
                direction: "row",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column", xs: "row" },
                overflowY: "scroll",
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    style={{
                        backgroundColor:
                            selectedCategory === category.name && "#FC1503",
                        color: "#fff",
                    }}
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                >
                    <span
                        style={{
                            color:
                                category.name === selectedCategory
                                    ? "white"
                                    : "red",
                            marginRight: "15px",
                        }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{
                            opacity:
                                category.name === selectedCategory ? 1 : 0.8,
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default SideBar;
