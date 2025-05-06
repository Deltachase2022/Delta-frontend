import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import MKBadge from "components/MKBadge";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsdata.io/api/1/latest", {
          params: {
            q: "banking Kerala",
            country: "in",
            language: "en",
            apiKey: "pub_46686ae576aff9c161e8d79521fc9c98a97b5",
          },
        });

        const filteredNews = response.data.results.filter((article) => article.image_url);
        setNews(filteredNews);
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading)
    return (
      <Typography variant="h6" align="center">
        Loading news...
      </Typography>
    );

  if (error)
    return (
      <Box textAlign="center" mt={10}>
        <MKBadge badgeContent="No Data Found" color="error" container />
      </Box>
    );

  return (
    <>
      <Typography mb={3}>
        <span id="trust_section" style={{ fontSize: "20px", fontWeight: "500", color: "#191A15" }}>
          LATEST NEWS
        </span>
      </Typography>
      <Box sx={{ py: 4 }}>
        {/* News Cards - Only 3 Cards */}
        <Grid container spacing={3}>
          {news.slice(0, 4).map((article, index) => (
            <Grid
              item
              xs={12}
              md={3}
              key={index}
              sx={{
                "@media (min-width: 769px) and (max-width: 992px)": {
                  flexBasis: "calc(100% / 2)", // Makes it 3 cards per row
                  maxWidth: "calc(100% / 2)", // Ensures they fit properly
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                {/* News Image */}
                <Box
                  sx={{
                    height: "200px",
                    background: "linear-gradient(90deg, #134FEF2E, #5E8AFE12)",
                    display: "flex",
                    justifyContent: "start",
                    borderRadius: "8px 8px 0 0",
                  }}
                >
                  <img
                    src={article.image_url}
                    alt={article.title}
                    style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px 8px 0 0" }}
                  />
                </Box>

                {/* Card Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Black Badge with White Text */}
                  <MKBadge
                    badgeContent={`${new Date(article.pubDate).toDateString()} | Finance`}
                    color="dark"
                    container
                  />

                  {/* Title */}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {article.title}
                  </Typography>

                  {/* Read More Link */}
                  <Box mt={2}>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "#7D7D7D",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Read More.
                    </a>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All News Link */}
        <Box mt={3}>
          <a
            href="https://www.newindianexpress.com/states/kerala"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#134FEF", fontSize: "16px", fontWeight: "500" }}
          >
            View All Latest News
          </a>
        </Box>
      </Box>
    </>
  );
}
