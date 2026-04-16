import { Box, Paper, Typography } from "@mui/material";

const formatKey = (key) =>
  key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const ExperienceCard = ({ experience }) => {
  if (!experience) return null;

  const data = Array.isArray(experience) ? experience : [experience];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {data.map((item, idx) => {
        if (typeof item !== "object") {
          return (
            <Paper key={idx} sx={{ p: 2 }}>
              <Typography>{item}</Typography>
            </Paper>
          );
        }

        return (
          <Paper
            key={idx}
            elevation={0}
            sx={{
              p: 2.5,
              mb: 2,
              borderRadius: 3,
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                {Object.entries(item).map(([key, value]) => {
                  if (!value) return null;

                  if (!isNaN(key)) return null;

                  // 🔹 ARRAY
                  if (Array.isArray(value)) {
                    return (
                      <Box key={key} sx={{ mb: 2 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {formatKey(key)}
                        </Typography>

                        <Box component="ul" sx={{ m: 0, pl: 2 }}>
                          {value.map((v, i) => (
                            <Typography
                              key={i}
                              component="li"
                              variant="body2"
                              sx={{ mb: 0.5 }}
                            >
                              {typeof v === "object"
                                ? Object.entries(v)
                                    .map(
                                      ([k, val]) => `${formatKey(k)}: ${val}`,
                                    )
                                    .join(", ")
                                : v}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    );
                  }

                  if (typeof value === "object") {
                    return (
                      <Box key={key} sx={{ mb: 2 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {formatKey(key)}
                        </Typography>

                        {Object.entries(value).map(([k, v]) => (
                          <Typography key={k} variant="body2">
                            <strong>{formatKey(k)}:</strong> {v}
                          </Typography>
                        ))}
                      </Box>
                    );
                  }

                  return (
                    <Typography key={key} variant="body2" sx={{ mb: 1 }}>
                      <strong>{formatKey(key)}:</strong> {value}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default ExperienceCard;
