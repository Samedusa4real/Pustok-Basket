using PustokTemplate.DAL;

namespace PustokTemplate.Services
{
    public class LayoutService
    {
        private readonly PustokDbContext _context;

        public LayoutService(PustokDbContext context)
        {
            _context = context;
        }
        public Dictionary<string, string> GetSettings()
        {
            return _context.Settings.ToDictionary(x=>x.Key, x => x.Value); 
        }
    }
}
