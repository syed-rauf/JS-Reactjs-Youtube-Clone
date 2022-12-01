import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);

    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
            .then((result) => setVideos(result.items))
            .catch((err) => console.log(err));
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                mb={2}
                sx={{ color: "white" }}
            >
                Search Result For:
                <span style={{ color: "#F31503" }}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;