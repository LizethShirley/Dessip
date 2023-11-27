import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Input from '@mui/joy/Input';
import ListSubheader from '@mui/joy/ListSubheader';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

const drawerWidth = 240;
const navItems = [
  { text: 'INICIO', href: '#inicio' },
  { text: 'ACERCA DE', href: '#acercaDe' },
  { text: 'CONTACTANOS', href: '#contactanos' },
];
const data = [
  {
    src: 'https://pnliafi.com/wp-content/uploads/2022/09/Ejemplos-de-objetivos.jpg',
    title: 'OBJETIVO',
    chanel: 'Nuestro objetivo general es diseñar, desarrollar e implementar aplicaciones web eficientes y funcionales que satisfagan las necesidades de sus clientes y usuarios finales. Esto implica crear sistemas web que mejoren la gestión y eficiencia de los procesos internos de una organización, faciliten el proceso de cotización y ventas, permitan tener presencia en línea y alcanzar nuevos mercados y clientes, entre otros objetivos específicos.',
  },
  {
    src: 'https://cbtis177.edu.mx/images/Mision-icono.png',
    title: 'MISIÓN',
    chanel: 'Nuestra misión se basa en diseñar y desarrollar sitios web atractivos, funcionales y de alta calidad que satisfagan las necesidades y objetivos de nuestros clientes. Nos especializamos en proporcionar soluciones personalizadas y adaptadas a las necesidades individuales de cada cliente, ayudándolos a establecer una presencia en línea efectiva y exitosa. Además, nos esforzamos por mejorar la experiencia del usuario en los sitios web, garantizando una navegación intuitiva y un diseño responsivo. Mantenemos actualizados nuestros conocimientos con las últimas tendencias y tecnologías en el campo del desarrollo web, para ofrecer soluciones vanguardistas. Nuestro compromiso también se extiende a brindar un excelente servicio al cliente y establecer relaciones duraderas con nuestros clientes.',
  },
  {
    src: 'https://www.esaelapaz.com.bo/src/recursos/vision.png',
    title: 'VISIÓN',
    chanel: 'Nuestra visión es impulsar la innovación y la creatividad en el diseño y desarrollo de sitios web. Buscamos ser reconocidos como líderes en la industria del desarrollo web, ofreciendo soluciones de alta calidad y vanguardistas. Nuestro objetivo principal es ayudar a nuestros clientes a alcanzar sus metas en línea a través de sitios web efectivos y funcionales. Nos esforzamos por ser una empresa confiable y de confianza en el campo del desarrollo web, adaptándonos y manteniéndonos actualizados con las últimas tendencias y tecnologías en el diseño y desarrollo web. Además, nos comprometemos a proporcionar un excelente servicio al cliente y establecer relaciones duraderas con nuestros clientes.',
  },
];
const Image = styled('img')({
  width: '50%',
});
function Mycomponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [color, setColor] = React.useState('neutral');
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MENÚ
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.href}>
              <ListItemText primary={item.text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const { loading = false } = props;
  return (
    <Box sx={{bgcolor: '#ffffff'}}>
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{bgcolor: '#000'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <div>
            <img width="64" src='https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/405181457_1389418598677728_4239891141191459577_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ej-qrrYaaHwAX_Cfnbh&_nc_ht=scontent.flpb1-1.fna&oh=00_AfA-6n_thnTcJJSB9_XCK1gdVmqNeG6CEfmsuCoLDk84sA&oe=656A47E7'/>
          </div>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.text} href={item.href} sx={{ color: '#fff'}}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
    <div id='inicio'>
    <Box sx={{border: '20px solid', p:3}}>
    <Toolbar/>
      <Typography sx={{color: '#000', fontSize: 40}} textAlign="center">
        DESSIP<br></br>
          Empresa de desarrollo de sistemas web
        </Typography>
        <Box sx={{ position: 'relative', textAlign: 'center'}}>
        <Image
          src="https://mba.americaeconomia.com/sites/mba.americaeconomia.com/files/styles/article_full_width/public/field/image/you-x-ventures-bzqu01v-g54-unsplash_2.jpg?itok=rRtYT-4J"
          alt=""
        />
        <Typography sx={{color: '#000', border: '10px', p:3}}>
        Somos una empresa de desarrollo de sistemas web dedicada a crear aplicaciones y sitios 
        web personalizados para nuestros clientes. Nuestro enfoque principal es ofrecer 
        soluciones tecnológicas que se adapten a las necesidades específicas de cada cliente.
        Nuestros servicios incluyen el diseño y desarrollo de aplicaciones web a medida. Nos 
        aseguramos de que nuestras aplicaciones sean accesibles desde diferentes dispositivos 
        y navegadores web, brindando una experiencia de usuario óptima.<br></br>
        Además del desarrollo de software, también ofrecemos servicios de mantenimiento y 
        actualización para garantizar que las aplicaciones web estén funcionando correctamente
        y se mantengan al día con las últimas tecnologías y tendencias.<br></br>
        Trabajamos en estrecha colaboración con nuestros clientes para comprender sus objetivos
        y requisitos comerciales, y así poder ofrecer soluciones personalizadas que impulsen 
        su éxito en línea. Nuestro equipo de desarrolladores altamente capacitados y 
        experimentados se esfuerza por brindar productos de alta calidad y satisfacer las 
        expectativas de nuestros clientes.
        </Typography>
        </Box>
    </Box>
    </div>
    <div id='acercaDe'>
    <Box >
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: '35%', marginRight: 0.5, my: 5, border: '10px solid', p:3}}>
          {item ? (
            <img
              style={{ width: 210, height: 140 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography display="block" variant="caption" color="text.secondary" fontSize='20px' textAlign='center'>
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary" textAlign='justify'>
                {item.chanel}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
    </Box>
    </div>
    <div id='contactanos'>
    <Box component="piePagina">
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== 'neutral' && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton variant="plain" href='https://www.facebook.com/profile.php?id=100084274674919'>
          <FacebookRoundedIcon/>
        </IconButton>
        <IconButton variant="plain" href='https://api.whatsapp.com/send?phone=59164861575&text=Enlace%3A%0Ahttps%3A%2F%2Ffb.me%2FcwmpeH7zM%0A%0AVi%20esto%20en%20Facebook...&app=facebook&fbclid=IwAR1fCdr0A9NXkvaOUYuYs-3rds3hRwJzTLh5nu7239ekTnayTLy6ezJ4v7w'>
          <WhatsAppIcon />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Escribe tu gmail"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe" href='mailto:madelenetorrez@gmail.com'>
              <SendIcon/>
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
            width:'25%',
          }}
        >
          <AspectRatio
            ratio="21/9"
            
            sx={{ flexBasis: { xs: 200, md: 'initial' }}}
          >
            <img alt=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqM9PXkTreOYJgv_Nr2ZIkI9w5s9OYtJeS76Bxta082LGf_udq8KH-_sXrf6TaUZFPiA&usqp=CAU" />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Importancia de una página web para una empresa (5 Razones)</Typography>
            <Typography level="body-xs">Marketing para no marketeros</Typography>
          </CardContent>
        </Card>
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
            width:'25%'
          }}
        >
          <AspectRatio
            ratio="21/9"
            
            sx={{ flexBasis: { xs: 200, md: 'initial' }}}
          >
            <img alt=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2C-nR7Ri0lUkQCXtRjBrma5yLTRzPZX5oPkw3r4iqaXXWV2-z-4QgwTYFVo3Espy-aVA&usqp=CAU" />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">¿Por qué crear una PÁGINA WEB para mi negocio? ✅ Beneficios de tener una página web en 2022</Typography>
            <Typography level="body-xs">Wilmar Velasquez</Typography>
          </CardContent>
        </Card>
        <List
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '18px', '--ListItem-gap': '0px', width: '30%'}}
        >
          <ListItem nested>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton href='#inicio'>Inicio</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='#acercaDe'>Acerca de</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='contactanos'>Contactanos</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Productos</ListSubheader>
            <List sx={{ '--ListItemDecorator-size': '32px' }}>
              <ListItem>
                <ListItemButton href='https://www.hostinger.es/tutoriales/que-es-un-sitio-web?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=20083&gad_source=1&gclid=CjwKCAiAmZGrBhAnEiwAo9qHiboa32q_SWZeCi_vN06To2c4kONu3zI2Kt59zkGcNun1uPrkig6ZVRoCpmUQAvD_BwE'>
                  Sitio web</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='https://mailchimp.com/es/resources/website-maintenance/#:~:text=El%20mantenimiento%20del%20sitio%20web%20incluye%20tareas%20como%20garantizar%20que,frecuencia%20y%20supervisar%20su%20rendimiento.'>
                  Matenimiento de sitios web</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href='https://vwo.com/es/optimizacion-web/#:~:text=La%20optimizaci%C3%B3n%20de%20una%20p%C3%A1gina,optimizaci%C3%B3n%20de%20buscadores%20(SEO).'>
                  Mejora de sitio web</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
    </Box>
    </div>
    </Box>
  );
}

export default Mycomponent;