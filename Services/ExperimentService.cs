using System.Net.Http;
using System.Net.Http.Json;
using ElementalUtopia.Models;

namespace ElementalUtopia.Services
{
    public class ExperimentService
    {
        private readonly HttpClient _http;

        public ExperimentService(HttpClient http)
        {
            _http = http;
        }

        public async Task<List<Experiment>> GetExperiments()
        {
            return await _http.GetFromJsonAsync<List<Experiment>>("data/experiments.json")
                   ?? new List<Experiment>();
        }
    }
}